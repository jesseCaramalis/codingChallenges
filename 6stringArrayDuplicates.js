// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Answer

function dup(s) {
    let res = []
    s.forEach((x,i,a)=>{
      let subArr = x.split('')
      let subStr = []
      for(let i = 0; i < subArr.length; i++){
        if(subArr[i] !== subArr[i+1]){
          subStr.push(subArr[i])
        }
      }
      res.push(subStr.join(''))
    })
    return res
  };


  //refactor with map

  function dup(s) {
    return s.map(x=>{
      let subArr = x.split('')
      let subStr = []
      for(let i = 0; i < subArr.length; i++){
        if(subArr[i] !== subArr[i+1]){
          subStr.push(subArr[i])
        }
      }
      return subStr.join('')
    })
  };

//refactor with map + filter

function dup(s) {
    return s.map(x=>{
      return x.split('').filter((el,ind,arr)=>{return arr[ind] !== arr[ind+1]}).join('')
    })
  };