import isLetter from "../utils/isLetter";

describe('isLetter',  () => {
  it('positive test, is letter', () => {
    expect(isLetter('e')).toBeTruthy()
  })

  it('empty line test, not a letter', () => {
    expect(isLetter(' ')).toBeFalsy()
  })

  it('digit test, not a letter', () => {
    expect(isLetter('3')).toBeTruthy()
  })
})