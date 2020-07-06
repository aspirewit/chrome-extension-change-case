import { swapCase } from 'swap-case'
import { createTextTransformation } from '../listenerFactory'

export default {
  key: 'swapCase',
  title: 'Swap case',
  description:
    'Transform a string by swapping every character from upper to lower case, or lower to upper case',
  contexts: ['selection'],
  onclick: createTextTransformation(swapCase),
}
