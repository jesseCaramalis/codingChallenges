// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

// Answer

function dashatize(num) {
    //handle nan case
    if(isNaN(num)){return 'NaN'}
    
    //covert num to positive for negative case, split num to subnum array.
    let strNum = Math.abs(num).toString().split('').map(Number)
    
    //loop through array, push numbers to output Arr;
    //if number is odd and previous number was odd, push number and '-' ('x','-')
    //else if number is odd, do the same but with '-' before as well ('-','x','-')
  
    let arr = []
    
    strNum.forEach((x,i,a)=>{
      
      if((x%2 !== 0) && (a[i-1]%2 !== 0))
      {arr.push(x,'-')}

      else if((x%2 !== 0))
      {arr.push('-',x,'-')}
      
      else{arr.push(x)}
    })
    let str = arr.join('')
    
    //still need to trim last '- off end'
    return str.charAt(str.length-1) == '-' ? str.slice(0,str.length-1) : str
    }