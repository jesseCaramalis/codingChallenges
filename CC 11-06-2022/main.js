// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let stringNum = num.toString.split('')
    stringNum.forEach(el => Math.pow((Number(el)),2)); //primitve values(strings/nums) cannot be mutated, only reassigned. In this line I am attempting to change the string type in place, instead of reassigning it back to its position in the array.
    return stringNum.join('')

  }

  function squareDigits(num){
    let stringNum = num.toString().split('')
    stringNum.forEach((el, i) => {
      stringNum[i] = Math.pow(Number(el), 2)}) //here we are working with each index in the arrray, reassigning our changed element to it instead of changing it in place. 
    return Number(stringNum.join(''))

  }
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    if(flower1 % 2 == 0 && flower2 % 2 !== 0) {
      return true;
    }
    else if(flower2 % 2 == 0 && flower1 % 2 !== 0) {
      return true;
    }
    else {
      return false;
    }
  }

  function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2; //if flower 1 is even and flower 2 isnt even, return true.  Even mod will always be 0, so if 0 does not equal the other side, returns true in either case. 
  }

  // Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    if(name.charAt(0) == 'R' || name.charAt(0) =='r'){
      return (`${name} plays banjo`)
    }else{
      return(`${name} does not play banjo`)
    }
    }
   