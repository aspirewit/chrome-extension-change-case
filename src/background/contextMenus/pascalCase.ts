import { pascalCase } from 'change-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'pascalCase',
  title: 'Pascal case',
  description: 'Transform into a string of capitalized words without separators',
  contexts: ['selection'],
  onclick: createTextTransformation(pascalCase),
}
