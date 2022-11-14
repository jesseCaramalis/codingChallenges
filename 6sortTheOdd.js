// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// Answer

// find odd numbers, store in their own sorted array.
// Map original array, if number is odd shift element from odds array and replace number with it. If even don't change.
function sortArray(array) {
  let odds = [...array].filter(x=>x%2 !== 0).sort((a,b)=>a-b)
  return array.map(x=>{
      if(x%2 !== 0 ){
        return x = odds.shift()
      }
      else{return x}
    })   
}