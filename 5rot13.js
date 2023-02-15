// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. 

// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

//Answer

//establish alphabet consts to compare letters of message against, easier to declare one for upper and one for lower.
//create a caesar cypher function that takes an array and a letter as args.
//cypher will iterate through the array and return the letter 13 places after the input letter, looping back to start if the end of the alphabet is reached.
//this function can be altered to include a cypher number as an argument to make it more dynamic, with some additional input tests to check for valid letter inputs.
//In that case it would be more ideal to store the alphabet vars as objects within the cypher function.

//Iterate through the message string and push the result of the cypher function to a result array, dependant on the characters case.

function rot13(message){
    const lowerCase = "abcdefghijklmnopqrstuvwxyz".split('')
    const upperCase = lowerCase.map(x=>x.toUpperCase())
 
    const cypher = (arr, l) => {
      let counter = 0
      for(let i = arr.indexOf(l); i>=0; i++){
          if(i === arr.length){
            i = 0
          }
          if(counter === 13){
            return arr[i]
          }
          counter ++
        }
      }

    let res = []
  
    message.split('').forEach(x=>{
      if(lowerCase.includes(x)){
        res.push(cypher(lowerCase, x))
      }
      else if(upperCase.includes(x)){
        res.push(cypher(upperCase, x))
      }
      else{
        res.push(x)
      }
    })
    return res.join('')
  }