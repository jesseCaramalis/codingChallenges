// Description:

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// Answer
//String containing max 9 seperate words, each word containing one number. Can contain min 0 words, empty string should return an empty string.
//the string sorted in order of the numbers.
//split string into array of strings
//array for each, if element includes (1-9 case for each number, array splice to result arr for that position)
function order(words){
    let arr = words.split(' ')
    let result = [1,2,3,4,5,6,7,8,9]
    result.length = arr.length
    if (words === '') {return ""}
    arr.forEach((element,index,array)=>{
        if(element.includes('1')){
            result.splice(0,1,element)
        }else if(array[index].includes('2')){
            result.splice(1,1,element)
        }else if(array[index].includes('3')){
            result.splice(2,1,element)
        }else if(array[index].includes('4')){
            result.splice(3,1,element)
        }else if(array[index].includes('5')){
            result.splice(4,1,element)
        }else if(array[index].includes('6')){
            result.splice(5,1,element)
        }else if(array[index].includes('7')){
            result.splice(6,1,element)
        }else if(array[index].includes('8')){
            result.splice(7,1,element)
        }else if(array[index].includes('9')){
            result.splice(8,1,element)
        }
    })
    return result.join(' ')
}

//this solution sucks but was time limited today, would either refactor to a switch statement or a for loop and map and push with number from the for loop.