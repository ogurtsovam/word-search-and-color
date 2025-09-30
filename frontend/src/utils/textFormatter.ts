import isLetter from "./isLetter";

type Counter = {
  [key: string]: number;
};

function textFormatter(data: string, rules: [string, string][]): string {
  const counter: Counter = {};
  rules.forEach(([, word]) => (counter[word] = 0));

  const result: string[] = [];
  let lastCopiedIndex: number = 0;

  for (let i = 0; i < data.length; i += 1) {
    if (isLetter(data[i])) {
      rules.forEach(([key, word]) => {
        if (data[i] === word[0]) {
          counter[word] += 1;
        } else if (counter[word] !== 0) {
          if (data[i] === word[counter[word]]) {
            counter[word] += 1;
          }
        } else {
          counter[word] = 0;
        }

        if (counter[word] === word.length) {
          result.push(
            `<span style={{ color: ${key} }}>${data.slice(
              lastCopiedIndex,
              i + 1
            )}</span>`
          );
          lastCopiedIndex = i + 1;
          counter[word] = 0;
        }
      });
    } else {
      result.push(data.slice(lastCopiedIndex, i + 1));
      lastCopiedIndex = i + 1;
    }
    if (i === data.length - 1 && lastCopiedIndex < data.length) {
      result.push(data.slice(lastCopiedIndex));
    }
  }

  return result.join("");
}

export default textFormatter;
