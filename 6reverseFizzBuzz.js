// Traditionally in FizzBuzz, multiples of 3 are replaced by "Fizz" and multiples of 5 are replaced by "Buzz". But we could also play FizzBuzz with any other integer pair [n, m] whose multiples are replaced with Fizz and Buzz.

// For a sequence of numbers, Fizzes, Buzzes and FizzBuzzes, find the numbers whose multiples are being replaced by Fizz and Buzz. Return them as an array [n, m]

// The Fizz and Buzz numbers will always be integers between 1 and 50, and the sequence will have a maximum length of 100. The Fizz and Buzz numbers might be equal, and might be equal to 1.

// Examples
// Classic FizzBuzz; multiples of 3 are replaced by Fizz, multiples of 5 are replaced by Buzz:
// [1, 2, "Fizz", 4, "Buzz", 6]  ==>  [3, 5] 
// Multiples of 2 are replaced by Fizz, multiples of 3 are replaced by Buzz:
// [1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"]  ==>  [2, 3]
// Multiples of 2 are replaced by Fizz and Buzz:
// [1, "FizzBuzz", 3, "FizzBuzz", 5, "FizzBuzz"]  ==>  [2, 2]
// Fizz = 1, Buzz = 6:
// ["Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz"]  ==>  [1, 6]

// Answer

// Need to return an array that contains the multiples of Fizz and Buzz, [fizz, buzz] such that every multiple in the input array is replaced by these corresponding strings.
// Set up a result array of [0,0]
// Loop through array, and if Fizz or Buzz is found and only if the corresponding value in the result array is 0, 
// we set the value to the index+1, which is the number that corresponds to where Fizz or Buzz has replaced it.
// We only change the value if it is 0 as we want the lowest multiple.
// Then need to check for FizzBuzz after both Fizz and Buzz have been checked for, as if neither is found but the value is FizzBuzz, then both result values are the same.

function reverseFizzBuzz(array) {
    let res = [0,0]
    for(let i = 0; i<array.length; i++){
      if((array[i] == 'Fizz') && (res[0] == 0)){
        res[0] = i+1
      }
      if((array[i] == 'Buzz') && (res[1] == 0)){
        res[1] = i+1
      }
      if((array[i] == 'FizzBuzz') && (res[0] == 0)){
        res[0] = i+1
      }
      if((array[i] == 'FizzBuzz') && (res[1] == 0)){
        res[1] = i+1
      }
    }
    return res
  };