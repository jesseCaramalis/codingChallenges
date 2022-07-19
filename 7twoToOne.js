// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//OR IN ENGLISH
//"Using the letters from both s1 and s2, return the unique letters in alphabetic order"

// Answer
function longest(s1, s2) {
  
  let arr = s1.concat(s2).split('').sort()
  return arr.filter(function(element, index, array){
    return element !== array[index - 1]
    }).join('')
}
