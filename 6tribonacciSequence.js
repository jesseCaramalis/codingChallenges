// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

//     So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
    
//     [1, 1 ,1, 3, 5, 9, 17, 31, ...]
//     But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
    
//     [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
//     Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
    
//     Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// Answer

// Input: A signature; an array of 3 numbers used to start the sequence, and n, the number of elements to return in the sequence including the signature.
// Output: an array of n elements, the first n elements of the sequence being the signature, and the rest being the sum of the previous 3 elements.
// if n is 0, return an empty array.

// establish a result array as the signature, we will push fibonacci results to this
// handle edge cases of n == 0 and n < 3. n<3 means we only want the first n elements of the signature, so we slice the result array to the first n elements.
// for loop to iterate through the sequence, starting at the 4th element, and pushing the sum of the previous 3 elements to the result array.

function tribonacci(signature,n){
    let res = signature
    if(n===0){return []}
    if(n<3){
      return res.slice(0,n)
    }  
  
    for(let i = 3; i <n; i++){
      res.push(res[i-1]+res[i-2]+res[i-3])
    }
    return res
  }