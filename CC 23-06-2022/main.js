// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna){
    let arr = dna.split('')
    arr.forEach((x,i)=>{
      if(arr[i] == 'A'){
        arr[i] = 'T' 
      }else if(arr[i] == 'T'){
        arr[i] = 'A'
      }else if(arr[i] == 'G'){
        arr[i]= 'C'
      }else if(arr[i] == 'C'){
        arr[i] = 'G'
      }
    })
    return arr.join('')
  }


//   Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

//   For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
  
//   [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b);
    return numbers[0] + numbers[1];
  };

//   You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

//   Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
  
//   []                                -->  "no one likes this"
//   ["Peter"]                         -->  "Peter likes this"
//   ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//   ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//   ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
  
//   Note: For 4 or more names, the number in "and 2 others" simply increases.
function likes(names) {
    if(names.length == 0){
      return "no one likes this"
    }else if(names.length == 1){
      return `${names[0]} likes this`
    }else if(names.length == 2){
      return `${names[0]} and ${names[1]} like this`
    }else if(names.length == 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else{
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
  }