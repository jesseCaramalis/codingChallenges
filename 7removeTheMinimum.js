// Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
//If there are multiple elements with the same value, remove the one with a lower index. 
//If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
// Examples

// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// Answer
function removeSmallest(numbers) {
    if(numbers.length == 1 || numbers.length == 0){
      return []
    }
    let dontMutate = [...numbers]
    let sorted = [...dontMutate].sort((a,b)=>a-b)
  dontMutate.splice((dontMutate.findIndex(x => x == sorted[0])),1)
  return dontMutate
}

//redid this using my brain

const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));