// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// Answer

function removeExclamationMarks(s) {
    return s.split('').filter(x => x !== '!').join('')
  }

//refactor

const removeExclamationMarks = (s) => s.split('').filter(x => x !== '!').join('')
  