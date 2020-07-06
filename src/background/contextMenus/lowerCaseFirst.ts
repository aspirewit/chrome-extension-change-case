import { lowerCaseFirst } from 'lower-case-first'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'lowerCaseFirst',
  title: 'Lower case first',
  description: 'Transforms the string with the first character in lower cased',
  contexts: ['selection'],
  onclick: createTextTransformation(lowerCaseFirst),
}
