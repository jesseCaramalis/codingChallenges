// Task:

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:

//     You need to round the answer to 2 decimal places and return it as String.

//     If the given value is 0 then it should return 0.00

//     You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


// Answer


function SeriesSum(n){
    let arr = []
    let j = 4
    if(n == 0){return '0.00'}
    for(let i = 1; i<=n; i++){
      if(i==1){arr.push(i)}
      else{
      arr.push(1/j)
      j+= 3
      }
    }
    return arr.reduce((acc,c)=>acc+c).toFixed(2).toString()
  }