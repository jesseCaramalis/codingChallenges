// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//Answer
function sumMix(x){
    return Number(x.reduce((acc,c)=>Number(acc) + Number(c)))
}

//refactor

const sumMix = (x) => Number(x.reduce((acc,c)=>Number(acc) + Number(c)))