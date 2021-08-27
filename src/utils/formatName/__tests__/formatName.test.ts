import formatName from 'utils/formatName'

const testName = 'John Wick'

it('Utils: Format name: String john_wick should be John Wick', () => {
  expect(formatName('john_wick')).toBe(testName)
})

it('Utils: Format name: String John_wick should be John Wick', () => {
  expect(formatName('John_wick')).toBe(testName)
})

it('Utils: Format name: String john_Wick should be John Wick', () => {
  expect(formatName('john_Wick')).toBe(testName)
})

it('Utils: Format name: String John_Wick should be John Wick', () => {
  expect(formatName('John_Wick')).toBe(testName)
})

it('Utils: Format name: String JoHn_Wick should be John Wick', () => {
  expect(formatName('John_Wick')).toBe(testName)
})

it('Utils: Format name: String John_WICK should be John Wick', () => {
  expect(formatName('John_WICK')).toBe(testName)
})

it('Utils: Format name: String john-wick should be John Wick', () => {
  expect(formatName('john-wick')).toBe(testName)
})

it('Utils: Format name: String John-wick should be John Wick', () => {
  expect(formatName('John-wick')).toBe(testName)
})

it('Utils: Format name: String john-Wick should be John Wick', () => {
  expect(formatName('john-Wick')).toBe(testName)
})

it('Utils: Format name: String John-Wick should be John Wick', () => {
  expect(formatName('John-Wick')).toBe(testName)
})

it('Utils: Format name: String JoHn-Wick should be John Wick', () => {
  expect(formatName('John-Wick')).toBe(testName)
})

it('Utils: Format name: String John-WICK should be John Wick', () => {
  expect(formatName('John-WICK')).toBe(testName)
})
