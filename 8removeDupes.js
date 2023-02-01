// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Answer

//Simple spread into set solution removes duplicates inherently and returns unique nums as an array.
function distinct(a) {
    let arr = [...new Set(a)]
    
    return arr
      
  }