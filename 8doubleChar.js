// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Answer

function doubleChar(str) {
    let arr = str.split('')
    let result = []
    arr.forEach((x,i)=>{
      result.push(x.repeat(2))
    })
    return result.join('')
  }
// refactor with map
  function doubleChar(str){
    str.split('').map(x => x + x).join('')
  }