// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Answer

// create a new array, store products of adjacent numbers in it, then return the largest number in the new array.

function adjacentElementsProduct(array) {
    let productArr = []
    for(i=0; i < array.length-1; i++){
      productArr.push(array[i]*array[i+1])
    }  
    return Math.max(...newArr)
  }