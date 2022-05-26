// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
// Return the resulting string.

function fakeBin(x){
    let splitStr = x.split('')
    splitStr.forEach((e, i) => {
        if(e<5){
             splitStr[i] = 0
        }else if(e > 4){
            splitStr[i] = 1
        }
    })
    return splitStr.join('')
}

//what I learned:
// initial code had me trying to set e = 0 and e = 1 in the conditionals. Doesn't work and needed the index of the element to change instead