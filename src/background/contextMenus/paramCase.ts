import { paramCase } from 'change-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'paramCase',
  title: 'Param case',
  description: 'Transform into a lower cased string with dashes between words',
  contexts: ['selection'],
  onclick: createTextTransformation(paramCase),
}
