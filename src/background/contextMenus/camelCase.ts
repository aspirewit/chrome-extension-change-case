import { camelCase } from 'change-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'camelCase',
  title: 'Camel case',
  description: 'Transform into a string with the separator denoted by the next word capitalized',
  contexts: ['selection'],
  onclick: createTextTransformation(camelCase),
}
