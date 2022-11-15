const writerOpts = {
  transform: (commit, context) => {
    const issues = []

    commit.notes.forEach((note) => {
      note.title = 'BREAKING CHANGES'
    })

    if (commit.type === 'feat')
      commit.type = 'Features'
    else if (commit.type === 'fix')
      commit.type = 'Bug Fixes'
    else if (commit.type === 'perf')
      commit.type = 'Performance Improvements'
    else if (commit.type === 'revert')
      commit.type = 'Reverts'
    else if (commit.type === 'refactor')
      commit.type = 'Code Refactoring'
    else if (commit.type === 'chore')
      commit.type = 'Maintenance'
    else
      return

    if (commit.scope === '*')
      commit.scope = ''

    if (typeof commit.hash === 'string')
      commit.shortHash = commit.hash.substring(0, 7)

    if (typeof commit.subject === 'string') {
      const url = `${context.packageData.bugs.url}/`
      if (url) {
        // Issue URLs.
        commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
          issues.push(issue)
          return `[#${issue}](${url}${issue})`
        })
      }
      if (context.host) {
        // User URLs.
        commit.subject = commit.subject.replace(/\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g, (_, username) => {
          if (username.includes('/'))
            return `@${username}`

          return `[@${username}](${context.host}/${username})`
        })
      }
    }

    // remove references that already appear in the subject
    commit.references = commit.references.filter((reference) => {
      return !issues.includes(reference.issue)
    })
    return commit
  },
  groupBy: 'type',
  commitGroupsSort: 'title',
  commitsSort: ['scope', 'subject'],
  noteGroupsSort: 'title',
}

function issueUrl() {
  if (pkgJson.repository && pkgJson.repository.url && ~pkgJson.repository.url.indexOf('github.com')) {
    const gitUrl = gufg(pkgJson.repository.url)

    if (gitUrl)
      return `${gitUrl}/issues/`
  }
}
module.exports = {
  writerOpts,
}
