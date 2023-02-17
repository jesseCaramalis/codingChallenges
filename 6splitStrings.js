// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//Answer

// iterate over the split string, if the index is odd, push the previous index and the current index into a result array.
// if the loop arrives at the last index and the string length is odd, push the last index and an underscore into the array.

function solution(str){
    let strArr = str.split('')
    let res = []

    for(let i = 0;i <strArr.length;i++){
      if(i % 2 !== 0){
        res.push(`${strArr[i-1]}${strArr[i]}`)
      }
      if((i == strArr.length-1)&&(strArr.length % 2 !== 0)){
        res.push(`${strArr[i]}_`)      
      }
  
    }
    return res
  }