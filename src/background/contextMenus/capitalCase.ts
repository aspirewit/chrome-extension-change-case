import { capitalCase } from 'change-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'capitalCase',
  title: 'Capital case',
  description: 'Transform into a space separated string with each word capitalized',
  contexts: ['selection'],
  onclick: createTextTransformation(capitalCase),
}
