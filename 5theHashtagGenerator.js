// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// Answer

function generateHashtag (str) {
    if(str.split(' ').join('').length === 0){
        return false
    }else{
    let arr = '#' + str.split(' ').map(x => {
        return x.charAt(0).toUpperCase() + x.slice(1)
    }).join('')
    return arr.length > 140 ? false : arr
    } 
}