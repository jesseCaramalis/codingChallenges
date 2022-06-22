// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)



//   Simple, given a string of words, return the length of the shortest word(s).

//   String will never be empty and you do not need to account for different data types.
function findShort(s){
    let arr = s.split(' ')
    arr.sort((a,b)=> a.length - b.length)
    return(arr[0].length)
  }