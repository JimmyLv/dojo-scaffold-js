function fizzBuzz(number) {
  let result = ''
  function relatedTo(target) {
    return number % target === 0 || number.toString().includes(target)
  }

  if (relatedTo(3)) {
    result += 'Fizz'
  }

  if (relatedTo(5)) {
    result += 'Buzz'
  }

  return result || number.toString()
}

describe('FizzBuzz', () => {
  const testCases = it.each`
    input | expected
    ${1}  | ${'1'}
    ${3}  | ${'Fizz'}
    ${5}  | ${'Buzz'}
    ${15} | ${'FizzBuzz'}
    ${51} | ${'FizzBuzz'}
    ${52} | ${'Buzz'}
    ${53} | ${'FizzBuzz'}
  `
  testCases(
    'should show number $expected when given $input',
    ({ input, expected }) => {
      // when
      const result = fizzBuzz(input)
      // then
      expect(result).toBe(expected)
    }
  )
})
