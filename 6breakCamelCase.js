// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// Answer

function solution(string) {
    let arr = string.split('')
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let result = []
    for(let i = 0;i<arr.length;i++){
        if(upper.includes(arr[i])){
            result.push(' ')
        }
    result.push(arr[i])
    }
    return result.join('')
}