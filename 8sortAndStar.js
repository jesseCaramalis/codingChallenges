// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// Answer

function twoSort(s) {
    s.sort()
    let result = s[0].split('')
    for(let i = result.length-1; i>0;i--){
        result.splice(i,0,'***')
    }
    return result.join('')
}//your brain without caffeine

function twoSorts(s) {
    s.sort()
    return s[0].split('').join('***')
}