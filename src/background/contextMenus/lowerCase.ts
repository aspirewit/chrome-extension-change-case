import { lowerCase } from 'lower-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'lowerCase',
  title: 'Lower case',
  description: 'Transforms the string to lower case',
  contexts: ['selection'],
  onclick: createTextTransformation(lowerCase),
}
