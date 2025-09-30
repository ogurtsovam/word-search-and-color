import isLetter from "./isLetter";

type Counter = {
  [key: string]: number;
};

function textFormatter(data: string, rules: [string, string][]): string {
  const counter: Counter = {}
  rules.forEach(([, word]) => counter[word] = 0)

  const result: string[] = []
  let currentWord: string = ''

  for(let i = 0; i < data.length; i += 1) {
    if (isLetter(data[i])) {
      rules.forEach(([key, word]) => {
      
        if (data[i] === word[0]) {
          counter[word] += 1
        } else if (counter[word] !== 0) {
          if (data[i] === word[counter[word]]) {
            counter[word] += 1
          }
        } else {
          counter[word] = 0
        }
        currentWord += data[i];

        if (counter[word] === word.length) {
          result.push(`<span style={{ color: ${key} }}>${currentWord}</span>`);
          counter[word] = 0
          currentWord = ''
        }
      })
    } else {
      if (currentWord !== '') {
        result.push(currentWord)
        currentWord = ''
      }
    }
  }
  
  if (currentWord !== '') {
    result.push(currentWord)
  }

  return result.join(' ')
}

export default textFormatter;