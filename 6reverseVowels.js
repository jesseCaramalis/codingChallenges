// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// reverseVowels("Hello!"); // "Holle!"
// reverseVowels("Tomatoes"); // "Temotaos"
// reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"

//Answer
//vowel array
//split string
//

function smallWordHelper(sentence){
    let arr = sentence.split(' ')
    let vowels = 'aeiou'.split('')
    arr.forEach((x,i,a)=>{
      if(arr[i].length < 4){
        arr[i] = arr[i].toUpperCase()
      }
    })
    let spltArr = arr.map(x=>x.split(''))
    
  }