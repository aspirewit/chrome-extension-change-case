import { snakeCase } from 'change-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'snakeCase',
  title: 'Snake case',
  description: 'Transform into a lower case string with underscores between words',
  contexts: ['selection'],
  onclick: createTextTransformation(snakeCase),
}
