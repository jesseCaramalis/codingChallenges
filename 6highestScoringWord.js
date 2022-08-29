// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Answer
function high(x){
    //create object assigning values to letters
    let letters = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
      k: 11,
      l: 12,
      m: 13,
      n: 14,
      o: 15,
      p: 16,
      q: 17,
      r: 18,
      s: 19,
      t: 20,
      u: 21,
      v: 22,
      w: 23,
      x: 24,
      y: 25,
      z: 26
      
    }
    let strings = x.split(' ')

    let numArr = strings.map(el=>el.split('')).map((e,i,a)=>{ //splits each word into subarrays, maps them to values in letter objects
         return e.map((x,i)=>{
           return x = letters[e[i]]
         })
      })
    let score = numArr.map((e,i,a)=>{
        return numArr[i].reduce((acc,c)=>acc+c)//adds values of each subarray to get total value for each word
    })
    return strings[score.indexOf(Math.max(...score))]
    //returns index of max scoring word from original array
  }