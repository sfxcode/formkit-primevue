import { expect, it } from 'vitest'
import { useOutputDuration } from '../src/composables'

it('durationToMinutes', () => {
  const { durationToMinutes } = useOutputDuration()
  expect(durationToMinutes('2h')).toBe(120)
  expect(durationToMinutes('40m')).toBe(40)
  expect(durationToMinutes('2h20m')).toBe(140)
  expect(durationToMinutes('2:40')).toBe(160)
})

it('formattedDuration', () => {
  const { formattedDuration } = useOutputDuration()
  expect(formattedDuration('120m')).toBe('2h')
  expect(formattedDuration('40m')).toBe('40m')
  expect(formattedDuration('140m')).toBe('2h 20m')
})

it('handles empty duration string', () => {
  const { durationToMinutes } = useOutputDuration()
  expect(durationToMinutes('')).toBe(0)
})

it('handles hours-only duration', () => {
  const { durationToMinutes } = useOutputDuration()
  expect(durationToMinutes('3h')).toBe(180)
})

it('handles minutes-only duration', () => {
  const { durationToMinutes } = useOutputDuration()
  expect(durationToMinutes('45m')).toBe(45)
})

it('handles colon-separated hours and minutes', () => {
  const { durationToMinutes } = useOutputDuration()
  expect(durationToMinutes('1:30')).toBe(90)
})

it('handles text format hours and minutes', () => {
  const { durationToMinutes } = useOutputDuration()
  expect(durationToMinutes('2h15m')).toBe(135)
})

it('returns original string for invalid input', () => {
  const { formattedDuration } = useOutputDuration()
  expect(formattedDuration('invalid')).toBe('0')
})

it('formats minutes-only duration', () => {
  const { formattedDuration } = useOutputDuration()
  expect(formattedDuration('45m')).toBe('45m')
})

it('formats hours-only duration', () => {
  const { formattedDuration } = useOutputDuration()
  expect(formattedDuration('120m')).toBe('2h')
})

it('formats hours and minutes duration', () => {
  const { formattedDuration } = useOutputDuration()
  expect(formattedDuration('135M')).toBe('2h 15m')
})

it('handles non-numeric duration values', () => {
  const { durationToMinutes } = useOutputDuration()
  expect(durationToMinutes('h')).toBe(0)
  expect(durationToMinutes('m')).toBe(0)
})
