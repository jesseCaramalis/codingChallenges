// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.
function find_average(array) {
  if(array.length == 0){
    return 0
  }else{
    return(array.reduce((acc, c) => acc + c)/array.length)
    }
  }
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]
const reverseSeq = n => {
  let result = []
    for(i = n; i > 0; i--){
      result.push(i)
    }
  };

// Trolls are attacking your comment section!

//   A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
  
//   Your task is to write a function that takes a string and return a new string with all vowels removed.
  
//   For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
  
//   Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let filterArr = str.split('');
  filterArr = filterArr.filter((el) => (el.toLowerCase() !== 'a') && (el.toLowerCase() !== 'e') && (el.toLowerCase() !== 'i') && (el.toLowerCase() !== 'o') && (el.toLowerCase() !== 'u'))
  return filterArr.join('')
}

// function disemvowel(str) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
  
//   return str.split('').filter(function(el) {
//     return vowels.indexOf(el.toLowerCase()) == -1;
//   }).join('');
// }