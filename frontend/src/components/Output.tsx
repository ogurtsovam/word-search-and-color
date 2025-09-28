import textFormatter from '../utils/textFormatter'
import formatRules from '../utils/formatRules'
import type {Rule} from '../library/baseLibrary'

function Output(data: string, rules: Rule[]) {

  const simpleRules = formatRules(rules)

  const result = textFormatter(data, simpleRules)

  return(
    <div>
      {result}
    </div>
  )
}

export default Output