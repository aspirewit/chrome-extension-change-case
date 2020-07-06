import { sentenceCase } from 'change-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'sentenceCase',
  title: 'Sentence case',
  description: 'Transform into a lower case with spaces between words, then capitalize the string',
  contexts: ['selection'],
  onclick: createTextTransformation(sentenceCase),
}
