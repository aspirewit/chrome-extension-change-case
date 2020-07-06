import { upperCase } from 'upper-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'upperCase',
  title: 'Upper case',
  description: 'Transforms the string to upper case',
  contexts: ['selection'],
  onclick: createTextTransformation(upperCase),
}
