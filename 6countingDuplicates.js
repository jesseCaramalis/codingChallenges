// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// Answer

function duplicateCount(text){
    let arr = text.toLowerCase().split('').sort().filter((x,i,a)=>{
      return x == a[i-1]
    })//converts text to array, filters it to only contain elements that are duplicated
    return arr.filter((x,i,a)=>{
      return x !== a[i-1]
    }).length
    //removes duplicates from this array as we only need count of duplicated letters.
    }