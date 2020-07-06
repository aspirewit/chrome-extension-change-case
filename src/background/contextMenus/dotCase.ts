import { dotCase } from 'change-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'dotCase',
  title: 'Dot case',
  description: 'Transform into a lower case string with a period between words',
  contexts: ['selection'],
  onclick: createTextTransformation(dotCase),
}
