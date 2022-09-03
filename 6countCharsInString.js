// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Answer

function count (string) {  
    let obj = {};
    string.split('').forEach(e => obj[e] = (obj[e] || 0)+1);
    return obj
  }

  /* if obj[e] exists, add 1 to it. If it doesnt exist, create it with a value of 0 then add 1 to it*/