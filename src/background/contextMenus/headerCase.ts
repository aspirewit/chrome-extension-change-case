import { headerCase } from 'change-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'headerCase',
  title: 'Header case',
  description: 'Transform into a dash separated string of capitalized words',
  contexts: ['selection'],
  onclick: createTextTransformation(headerCase),
}
