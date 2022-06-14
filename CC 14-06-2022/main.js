// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
    return(a.includes(x))
  }

//   Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
//   Examples (Input -> Output)
  
//   * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
//   * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
//   * [42, 54, 65, 87, 0]             -> min = 0, max = 87
//   * [5]                             -> min = 5, max = 5
  
//   Notes
  
//       You may consider that there will not be any empty arrays/vectors.
  
var min = function(list){
    list.sort((a,b) => a-b)
    return list[0];
}//ascending order -

var max = function(list){
    list.sort((a,b) => b-a)
   return list[0];
}//descending order +

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s){
    let arr = s.split('');
    if(arr.length %2 == 0){
        return arr[(arr.length/2)-1] + arr[arr.length/2]
    }else{
        return arr[(arr.length-1)/2]
    }

}//this one took a lot of trial and error. Thinking logically through it would have prevented that, it's quite straightforward.

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes

//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    let arr = numbers.split(" ").map(function(item) {
        return item.trim();
      });
    let numArr = arr.map(str => {
        return Number(str)
    })
    return((Math.max(...numArr)).toString() + " " + (Math.min(...numArr)).toString())
  }