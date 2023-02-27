// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

// Other Examples:
// ls = [1, 2, 3, 4, 5, 6] 
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

// ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
// parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
// Notes
// Take a look at performance: some lists have thousands of elements.
// Please ask before translating.

// Answer

// Input is an array of numbers.
// Output is the sum of each subarray in the input, meaning each segment as length decreases by 1.
// Grab the total of the original array. Create a result array.
// Starting with the total, loop through the original array, each time subtracting x from the total and pushing to the result array.

function partsSums(ls) {
    let total = ls.reduce((acc,c)=> acc+c, 0) // important to set the initial value to 0 to account for empty input arrays.
    let res = []
    for(let i = 0; i <= ls.length; i++){
      res.push(total)
      total -= ls[i]
    }
    return res
      
  }