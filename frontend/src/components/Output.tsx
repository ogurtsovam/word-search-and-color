import textFormatter from "../utils/textFormatter";
import formatRules from "../utils/formatRules";
import type { Rule } from "../library/baseLibrary";

function Output(data: string, rules: Rule[]) {
  const formattedRules = formatRules(rules);

  const result: string = textFormatter(data, formattedRules);

  return (
    <div>
      <textarea>{result}</textarea>
    </div>
  );
}

export default Output;
