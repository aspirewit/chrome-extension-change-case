import { spongeCase } from 'sponge-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'spongeCase',
  title: 'Sponge case',
  description: 'Transform into a string with random capitalization applied',
  contexts: ['selection'],
  onclick: createTextTransformation(spongeCase),
}
