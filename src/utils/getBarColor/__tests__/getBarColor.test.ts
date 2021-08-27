import getBarColor, { Color } from 'utils/getBarColor'

it('Utils: Get bar color: 75 should be Green color', () => {
  expect(getBarColor(75)).toBe(Color.Green)
})

it('Utils: Get bar color: 90 should be Green color', () => {
  expect(getBarColor(90)).toBe(Color.Green)
})

it('Utils: Get bar color: 100 should be Green color', () => {
  expect(getBarColor(100)).toBe(Color.Green)
})

it('Utils: Get bar color: 50 should be Yellow color', () => {
  expect(getBarColor(50)).toBe(Color.Yellow)
})

it('Utils: Get bar color: 60 should be Yellow color', () => {
  expect(getBarColor(60)).toBe(Color.Yellow)
})

it('Utils: Get bar color: 74 should be Yellow color', () => {
  expect(getBarColor(74)).toBe(Color.Yellow)
})

it('Utils: Get bar color: 25 should be Orange color', () => {
  expect(getBarColor(25)).toBe(Color.Orange)
})

it('Utils: Get bar color: 40 should be Orange color', () => {
  expect(getBarColor(40)).toBe(Color.Orange)
})

it('Utils: Get bar color: 49 should be Orange color', () => {
  expect(getBarColor(49)).toBe(Color.Orange)
})

it('Utils: Get bar color: 0 should be Red color', () => {
  expect(getBarColor(0)).toBe(Color.Red)
})

it('Utils: Get bar color: 15 should be Red color', () => {
  expect(getBarColor(15)).toBe(Color.Red)
})

it('Utils: Get bar color: 24 should be Red color', () => {
  expect(getBarColor(24)).toBe(Color.Red)
})
