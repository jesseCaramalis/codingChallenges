// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :
// "12222666666999999999"

// Answer

//will be faster to just create an object with the number : expanded number as key:value, than to run loops etc. Split string and map, changing digit to expanded digit.

function explode(s) {
    const expandedDigits = {
      0: '',
      1: '1',
      2: '22',
      3: '333',
      4: '4444',
      5: '55555',
      6: '666666',
      7: '7777777',
      8: '88888888',
      9: '999999999',
    }
    return s.split('').map(x=>{
      return expandedDigits[x]
    }).join('')
  }

//Optimised

// can use string.repeat method with the number as the argument, so no need to create an object with the expanded numbers. Same time complexity, but less code.

function explode(s) {
    return s.split('').map(x=>
      x.repeat(+x) // plus operator converts string to number, JS will convert to number anyway, but this is more explicit
    ).join('')
  }