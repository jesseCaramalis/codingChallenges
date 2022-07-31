// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// Answer
//P - string, any length upper and lower case, can contain numbers and symbols.
//R - new string with ( in place of characters with no duplicates in the string, and ) in place of characters that appear multiple times.
//  - ignore upper/lower case when determining duplicates
//E - 
/*P - convert string to lower case.
    - map string to new arrray with function: if(filter dupe returns true)
*/

function duplicateEncode(word){
    let strArr = word.toLowerCase().split('')
    let result = ''
    strArr.map((x,i,a)=>{
      a.indexOf(x) == a.lastIndexOf(x) ? result += '(' : result += ')'
    })
  return result
    }
