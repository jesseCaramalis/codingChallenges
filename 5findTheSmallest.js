// You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.

// Task:
// Return an array or a tuple or a string depending on the language (see "Sample Tests") with

// the smallest number you got
// the index i of the digit d you took, i as small as possible
// the index j (as small as possible) where you insert this digit d to have the smallest number.
// Examples:
// smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
// 126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

// smallest(209917) --> [29917, 0, 1] or ...

// [29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than 
// index `i` in [29917, 0, 1].
// 29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which gave 029917 which is the number 29917.

// smallest(1000000) --> [1, 0, 6] or ...

// Answer


/*need to find smallest number that's not the first one.
if it's smaller than the first num, then it gets moved in first.
if it's larger than the first one it goes right after it.*/

function smallest(n) {
    let str = n.toString().split('')
    const first = n.toString().charAt()
    /*-----number exists smaller than first char------*/
    let res = str
    //find number smaller than first num
    let num1 = n.toString().split('').find((x,i) => x <= first && i !== 0)
    //if number exists, remove from array and put in first.
    if(num1){
      let d = str.indexOf(num1)
      let j = 0
      str.splice((str.indexOf(num1)),1)
      res.unshift(num1)
      return [Number(res.join('')),d,j]
    }
    /*-----number exists smaller than first char------*/
    const second = n.toString().charAt(1)
    if(!num1){
      let num2 = n.toString().split('').find((x,i) => x <= second && i > 1)
      let d = str.indexOf(num2)
      let j = 1
      str.splice((str.indexOf(num2)),1)
      res.splice
      return [Number(res.join('')),d,j]
    }
    
  
    
}