// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// Answer

function solve(s){
    const vowels = 'aeiou'.split('');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    //split string '', map to new arr with vowels replaced with empty spaces.
    let arr = s.split('').map(e=>{return vowels.includes(e) ? ' ' : e }).join('')

     //map arr to new arr with consonants replaced with value of their index in alphabet array
    let numArr = arr.split('').map(x=>{ return x = alphabet.indexOf(x) + 1})

    //declare counter and array to store values of each substring
    let max = 0
    let maxArr = []
    //for loop adds count of substring numbers to var max, when loop reachs a zero, value of max is pushed to
    //an array and count is reset.
    for(let i = 0; i < numArr.length;){

      if((i == numArr.length - 1) && (numArr[i] !== 0)){//checks last character of array
      max += numArr[i]
      maxArr.push(max)
      }
      if(numArr[i] !== 0){ //number being counted
        max += numArr[i]
        i++
      }
      if(numArr[i] == 0){//0 skips and pushes to array
        maxArr.push(max)
        max = 0
        i++
      }
    }
    return Math.max(...maxArr)
      
    }