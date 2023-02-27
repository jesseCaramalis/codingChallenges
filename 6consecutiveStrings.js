// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

// Answer

// Establish a variable to hold the concatenated string
// Check for constraints first then proceed with operation
// A forEach where we slice the array from the current index to the current index + k, assigning it to the var str.
// If the length of str is greater than the length of concat, then we reassign concat to str.
// Loop will only reassign concat if the length of str is greather, preventing the first longest string from being overwritten.

function longestConsec(strarr, k) {
    let concat = ''
    if(strarr.length == 0 || k > strarr.length || k <= 0)
      {return ""}
    strarr.forEach((x,i)=>{
      let str = strarr.slice(i,i+k).join('')
      if(str.length > concat.length){
        concat = str
      }
    })
    return concat
      
  }
