// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

// Answer

//parameters: string of any length, may contain numbers, in camelCase.
//must return a lower case string with words split by a dash containing no numbers.
//need numbers and uppercase const
//first split string and filter out nums
//create result array
//iterate over split string, push letters to result array and if uppercase push a dash first.

function kebabize(str) {
    const nums = '1234567890'.split('');
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let noNums = str.split('').filter(x=> !nums.includes(x))
    let arr = []
    noNums.forEach((x,i,a)=>{
      if(upper.includes(a[i]) && (i !== 0)){
        arr.push('-')
        arr.push(x.toLowerCase())
      }else{arr.push(x.toLowerCase())}
    })
    return arr.join('')
  }