import fs from 'fs-extra'
import * as sass from 'sass'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    { builder: 'mkdist', input: './src', pattern: ['**/*.vue'], loaders: ['vue'] },
    { builder: 'mkdist', input: './src', pattern: ['**/*.ts'], format: 'cjs', loaders: ['js'] },
    { builder: 'mkdist', input: './src', pattern: ['**/*.ts'], format: 'esm', loaders: ['js'] },
  ],
  hooks: {
    'mkdist:done': () => {
      const compiledSass = sass.compile('./src/sass/formkit-primevue.scss', { style: 'compressed', loadPaths: ['./node_modules/'] })

      fs.writeFileSync(
        'dist/style.css',
        compiledSass.css,
        { encoding: 'utf-8' },
      )

      fs.mkdirSync('dist/sass')
      fs.copyFileSync(
        'src/sass/formkit-primevue.scss',
        'dist/sass/formkit-primevue.scss',

      )
    },
  },
  declaration: true,
  clean: true,
})
