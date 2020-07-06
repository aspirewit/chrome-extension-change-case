import * as R from 'ramda'
import contextMenus from './contextMenus'

R.forEach(
  R.pipe(
    R.pick(['title', 'contexts', 'onclick']),
    chrome.contextMenus.create
  ),
  contextMenus
)
