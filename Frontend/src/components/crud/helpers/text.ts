export function upperCamelCase(phrase: string) {
  let firstCapitalLetter = phrase[0].toUpperCase()
  let upperCaseText = firstCapitalLetter
  for (let i = 0; i < phrase.length; i++) {
    if (i == 0) continue
    upperCaseText += phrase[i]
  }

  return upperCaseText
}
