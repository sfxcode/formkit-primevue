export function useOutputDuration() {
  function durationToMinutes(duration: string): number {
    let hours = 0
    let minutes = 0

    const lowerDuration = duration.toLowerCase()

    if (lowerDuration.includes(':')) {
      [hours, minutes] = lowerDuration.split(':').map(part => +part.trim())
    }
    else {
      if (lowerDuration.includes('h')) {
        hours = +lowerDuration.split('h')[0].trim()
        const remainder = lowerDuration.split('h')[1] || ''

        if (remainder.includes('m'))
          minutes = +remainder.split('m')[0].trim()
        else if (/^\d+$/.test(remainder))
          minutes = +remainder
      }
      else if (lowerDuration.includes('m')) {
        minutes = +lowerDuration.split('m')[0].trim()
      }
      else if (/^\d+$/.test(lowerDuration)) {
        minutes = +lowerDuration
      }
    }

    return hours * 60 + minutes
  }

  function formattedDuration(duration: string): string {
    const minutes = durationToMinutes(duration)
    const hours = Math.trunc(minutes / 60)
    const remainingMinutes = minutes % 60

    if (minutes === 0)
      return '0'
    return `${hours > 0 ? `${hours}h` : ''}${hours > 0 && remainingMinutes > 0 ? ' ' : ''}${remainingMinutes > 0 ? `${remainingMinutes}m` : ''}`
  }

  return { durationToMinutes, formattedDuration }
}
