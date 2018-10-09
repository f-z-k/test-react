import * as ActionTypes from './ActionTypes'
export const test  = (_text) => {
  return {
    type: ActionTypes.TEST,
    text: _text
  }
}