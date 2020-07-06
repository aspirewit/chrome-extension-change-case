import { titleCase } from 'title-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'titleCase',
  title: 'Title case',
  description: 'Transform a string into title case following English rules',
  contexts: ['selection'],
  onclick: createTextTransformation(titleCase),
}
