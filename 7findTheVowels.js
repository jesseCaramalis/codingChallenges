function vowelIndices(word){
    const vowels = "aeiouy".split('')
    let wordArr = word.toLowerCase().split('')
    let res = []
    wordArr.forEach((x,i) => {
      if(vowels.includes(x)){
        res.push(i+1)
      }    
    })
    return res
  }