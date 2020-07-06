import * as copyToClipboard from 'copy-to-clipboard'
import * as R from 'ramda'

export const createTextTransformation = fn =>
  R.pipe(R.propOr('', 'selectionText'), fn, copyToClipboard)
