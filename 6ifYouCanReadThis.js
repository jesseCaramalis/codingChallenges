// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// There are preloaded dictionary you can use, named NATO
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

/* 
    P: String 'words' of any length, containing letters (potentially numbers), punctuation of ,.!?.
    R: A string where every letter is converted to NATO phonetic code words. Punctuation is kept, and all words and punctuation should be seperated with a space. Spaces from original string can be discarded.
    E: If, you can read? A: India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?
    P: Take words to lower case to work with nato dic, join('') then split(' ').
       return map matching letter to key in NATO object.
*/

function to_nato(words) {
    let arr = words.toLowerCase().split('')
    let punc = (",.!? ").split('')
    let natoified = arr.map(x=>{
        if(!punc.includes(x)){
        return x = NATO[x]
        }
        else{
        return x
        }
    })
    return natoified.filter(x => x !== ' ').join(' ')
}