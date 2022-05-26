// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    return(numbers.reduce((a, c) => a + Math.pow(c,2),0))
     }


// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input){
//     if(input === [] || null || 0){
//         return []
//     }else{
//         let resultArr = []
//         let posNums = input.filter(x => x > 0)
//         let negNums = input.filter(x => x < 0)
//         let countPosNums = posNums.length
//         let sumNegNums = (negNums.reduce((a,c) => a + c,0))
//         resultArr.push(countPosNums, sumNegNums)
//         return(resultArr)

//     }
// }


function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}