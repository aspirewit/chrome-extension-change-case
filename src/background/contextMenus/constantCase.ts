import { constantCase } from 'change-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'constantCase',
  title: 'Constant case',
  description: 'Transform into upper case string with an underscore between words',
  contexts: ['selection'],
  onclick: createTextTransformation(constantCase),
}
