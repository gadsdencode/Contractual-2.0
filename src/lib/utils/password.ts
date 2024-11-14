import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core'
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en'

const options = {
  translations: zxcvbnEnPackage.translations,
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnEnPackage.dictionary,
  },
}

zxcvbnOptions.setOptions(options)

export function calculatePasswordStrength(password: string) {
  const result = zxcvbn(password)
  
  const feedback = result.feedback.warning || 
    (result.score < 3 ? 'Add more characters for a stronger password' : 'Strong password!')

  return {
    score: result.score,
    feedback
  }
}
