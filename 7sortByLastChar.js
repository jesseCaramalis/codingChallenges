// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// Answer

function last(x){
    let words = x.split(' ')
    words.sort((a,b)=>{
      const lastA = a.charAt(a.length-1)
      const lastB = b.charAt(b.length-1)
      if(lastA < lastB){
        return -1
      }
    })
    return words
  }

/*split string into array of words,
sort using array(a.charAt(a.length-1)) */
