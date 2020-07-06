import { upperCaseFirst } from 'upper-case-first'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'upperCaseFirst',
  title: 'Upper case first',
  description: 'Transforms the string with the first character in upper cased',
  contexts: ['selection'],
  onclick: createTextTransformation(upperCaseFirst),
}
