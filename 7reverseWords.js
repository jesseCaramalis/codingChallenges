// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// Answer

function reverseWords(str) {
    let arr = str.split(' ')
    for(let i = 0;i<arr.length;i++){
      arr[i] = arr[i].split('').reverse().join('')
    }
  return arr.join(' ')
  }