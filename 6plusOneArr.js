// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

// Answer

// first check if array is valid, integers should be between 0 and 9 and array mustn't be empty.
// if array is valid, loop through array from the end, adding 1 to current value and if sum is 10, carry 1 to next iteration.
// sum var will be current value in array plus carry var (1)
// if sum is 10, carry will be 1, otherwise 0. If carry is 0 then loop terminates to prevent unnecessary iterations
// current value in array will be 0 if sum is 10, otherwise sum.

// after looping if carry still exists then add to front of array.
function upArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0 || arr.some(n => n < 0 || n > 9)) {
      return null
    }
    let carry = 1
    for (let i = arr.length - 1; i >= 0 && carry > 0; i--) {
      let sum = arr[i] + carry
      carry = Math.floor(sum / 10) //carry will be 1 if sum is 10, otherwise 0.
      arr[i] = sum % 10 //arr[i] will be 0 if sum is 10, otherwise sum.
    }
    if (carry > 0) {
      arr.unshift(carry)
    }
    return arr;
  }