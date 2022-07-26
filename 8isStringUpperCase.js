// Is the string uppercase?
// Task

// Create a method to see whether the string is ALL CAPS.
// Examples (input -> output)

// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// Answer

// String.prototype.isUpperCase = function() {
//     let arr = this.split('')
//     let lower = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     if(arr.some(x => lower.includes(x))){
//         return false
//     }else{
//       return true
//     }
//   }
// Can just compare string to it's uppercase version.
  String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }