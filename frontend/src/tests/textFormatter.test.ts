import testFormatter from '../utils/textFormatter';

describe('testFormatter', () => {
  it('returns words without changing', () => {
    const data = 'pump lamp'
    const rules: [string, string][] = [['#FF0000', 'new']];

    const result = testFormatter(data, rules);

    const expectedResult = 'pump lamp'

    expect(result).toEqual(expectedResult);
  });

  it('returns colored words from rules', () => {

    const data = 'new big lamp'
    const rules: [string, string][] = [['#FF0000', 'new'], ['#00ff04ff', 'big']];

    const result = testFormatter(data, rules);

    const expectedResult = '<span style={{ color: #FF0000 }}>new</span> <span style={{ color: #00ff04ff }}>big</span> lamp'

    expect(result).toEqual(expectedResult);
  });

  it('returns colored word from rules', () => {

    const data = 'new'
    const rules: [string, string][] = [['#FF0000', 'new']];

    const result = testFormatter(data, rules);

    const expectedResult = '<span style={{ color: #FF0000 }}>new</span>'

    expect(result).toEqual(expectedResult);
  });
});