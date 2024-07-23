import { expect, it } from 'vitest'
import { useOutputDuration } from '../src/composables'

it('durationToMinutes', () => {
  const { durationToMinutes } = useOutputDuration()
  expect(durationToMinutes('2h')).eq(120)
  expect(durationToMinutes('40m')).eq(40)
  expect(durationToMinutes('2h20m')).eq(140)
  expect(durationToMinutes('2:40')).eq(160)
})

it('formattedDuration', () => {
  const { formattedDuration } = useOutputDuration()
  expect(formattedDuration('120m')).eq('2h')
  expect(formattedDuration('40m')).eq('40m')
  expect(formattedDuration('140m')).eq('2h 20m')
})
