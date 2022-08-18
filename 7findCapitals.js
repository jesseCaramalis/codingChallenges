// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// Answer

var capitals = function (word) {
	const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  let result = []
  word.split('').forEach((e,i,a)=>{
    if(caps.includes(e)){
      result.push(i)
    }
  })
  return result
};