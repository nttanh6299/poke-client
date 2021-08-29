import random from 'utils/random'

it('Utils: Random: Should return a number between 5 and 10', () => {
  expect(random(5, 10)).toBeLessThanOrEqual(10)
  expect(random(5, 10)).toBeGreaterThanOrEqual(5)
})
