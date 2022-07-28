// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// Answer

function persistence(num) {
    const splitNumber = num => num.toString().split('').map(x => Number(x)) // create function that splits number into individual numbers
    let reduceNum = splitNumber(num) //create number variable to iterate on in loop
    let counter = 0 //create counter to return
    while(reduceNum.length != 1){
      counter ++
      reduceNum = splitNumber(reduceNum.reduce((acc,c)=> acc*c))
      //while loop that runs while the number is not a single digit. 
      //Multiplies reduce num elements together, sets reduce num to the split result, and adds to counter on every iteration.
    }
   return counter
  }

  //first try somehow