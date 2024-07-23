export function useOutputDuration() {
  function durationToMinutes(duration: string): number {
    let hours = 0
    let minutes = 0
    if (duration.includes(':')) {
      hours = +duration.substring(0, duration.indexOf(':')).trim()
      minutes = +duration.substring(duration.indexOf(':') + 1).trim()
    }
    else {
      let durationString = duration
      if (duration.includes('h')) {
        hours = +duration.substring(0, duration.indexOf('h')).trim()
        durationString = duration.substring(duration.indexOf('h') + 1)
      }
      if (durationString.includes('m'))
        minutes = +durationString.substring(0, durationString.indexOf('m')).trim()
      if (durationString === durationString.replace(/\D/g, ''))
        minutes = +durationString
    }
    return hours * 60 + minutes
  }

  function formattedDuration(duration: string): string {
    const minutes = durationToMinutes(duration)

    const stunden = Math.trunc(minutes / 60)
    const minuten = minutes % 60

    let result = ''

    if (stunden > 0)
      result = `${result} ${stunden}h`
    if (minuten > 0)
      result = `${result} ${minuten}m`
    if (minutes === 0)
      result = '0'

    if (result.length === 0)
      result = duration
    return result.trim()
  }

  return { durationToMinutes, formattedDuration }
}
