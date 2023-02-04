// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

//define allowed vars in each "slot". foreach through array, check each char in string against allowed chars. if all 3 match, count += 1. return count.


function countSmileys(arr) {
    const eyes = [':',';']
    const nose = ['-','~']
    const smile = [')','D']
    let count = 0
      arr.forEach(x=>{
        if(eyes.includes(x[0]) &&
          (nose.includes(x[1]) || x.length==2) && //allows for no 'nose' character
          (smile.includes(x[2]) || smile.includes(x[1]))) //allows for no 'nose' character
          {
            console.log(x)
            count += 1}
      })
    return count
  }