type Counter = {
  [key: string]: number;
};

function textFormatter(data: string, rules: [string, string][]): string {
  const counter: Counter = {}
  rules.forEach(([, word]) => counter[word] = 0)

  const result: string[] = []

  // нужна не добавляем слово пока оно не целое, ждём " "
  // нужно написать функцию Которая проверяет что символ - буква/цифра

  for(let i = 0; i < data.length; i += 1) {
    rules.forEach(([key, word]) => {
      if (counter[word] !== 0) {
        if (data[i] === word[counter[word]]) {
          counter[word] += 1
        }
      }
      if (data[i] === word[0]) {
        counter[word] += 1
      }

      if (word.length === counter[word]) {
        
        result.push(`<span style={{ color: ${key}}}>${word}</span>`)
      } 
    })
  }

  return result.join()
}

export default textFormatter;