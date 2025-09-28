import formatRules from '../utils/formatRules';
import type { Rule } from '../library/baseLibrary';

describe('formatRules', () => {
  it('converts array of rules into an array of corteges [color, word]', () => {
    const rules: Rule[] = [
      { color: '#FF0000', words: ['big', 'new'] },
      { color: '#00FF00', words: ['small'] }
    ];

    const result = formatRules(rules);

    expect(result).toEqual([
      ['#FF0000', 'big'],
      ['#FF0000', 'new'],
      ['#00FF00', 'small']
    ]);
  });

  it('returns empty array if there are no rules', () => {
    expect(formatRules([])).toEqual([]);
  });
});