// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// Answer

//function accepts an array of random length, containing strings, nums or other values.
//need to remove all 0's from array and place at end without modifying order of other elements
//can create a new array of the original array filtered to remove 0's
//difference in length of the original array and filteredArray is the number of 0's removed
//simple for loop for that number that pushes a 0 to the filteredArray for that difference in length.
//need to also save the filteredArray length as a seperate variable so that the for loop iterates the correct amount of times.

function moveZeros(arr) {
    let filteredArr = arr.filter(x=> x !== 0)
    const length = filteredArr.length
    for(let i = 1; i<= arr.length-length; i++){
      filteredArr.push(0)
    }
    return filteredArr
  }