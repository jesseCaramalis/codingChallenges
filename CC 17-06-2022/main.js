// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function XO(str) {
    let xCount = 0
    let oCount = 0
    str.split('').forEach((x,i)=>{
        if(x == 'x' || x == 'X'){
            xCount ++
        }else if(x == 'o' || x == 'O'){
            oCount ++
        }
    });
    if(xCount === oCount){
      return true
    }else{
      return false
    }
    }


// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    return s.split('').map((x,i)=> (x.toUpperCase() + x.toLowerCase().repeat(i))).join('-')
    }