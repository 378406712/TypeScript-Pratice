namespace Validation {
  const isWords = /\^[A-Za-z]$/
  export const isNumber = /^[0-9]$/
  export const checkLetter = (text: any) => {
    return isWords.test(text)
  }
}
