import uuid from 'uuid';

// przykładowy plik actions.js
export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  }
}


// plik actions.js
// typ akcji:
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT'

// kreator akcji:
export function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  }
}