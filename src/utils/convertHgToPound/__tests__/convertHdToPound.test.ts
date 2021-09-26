import convertHgToPound from 'utils/convertHgToPound'

it('Utils: Convert Hg to Pound: 905hg should be equal to 199.5', () => {
  expect(convertHgToPound(905)).toBe(199.5)
})

it('Utils: Convert Hg to Pound: 905hg should be equal to 199.52', () => {
  expect(convertHgToPound(905, 2)).toBe(199.52)
})

it('Utils: Convert Hg to Pound: NaN should be equal to 0', () => {
  expect(convertHgToPound(NaN, 2)).toBe(0)
})
