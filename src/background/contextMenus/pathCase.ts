import { pathCase } from 'change-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'pathCase',
  title: 'Path case',
  description: 'Transform into a lower case string with slashes between words',
  contexts: ['selection'],
  onclick: createTextTransformation(pathCase),
}
