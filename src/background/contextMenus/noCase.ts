import { noCase } from 'change-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'noCase',
  title: 'No case',
  description: 'Transform into a lower cased string with spaces between words',
  contexts: ['selection'],
  onclick: createTextTransformation(noCase),
}
