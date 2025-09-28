import type {Rule} from '../library/baseLibrary'

function formatRules(rules: Rule[]): [string, string][] {
  return rules.flatMap(rule =>
    rule.words.map(word => [rule.color, word] as [string, string])
  );
}

export default formatRules
