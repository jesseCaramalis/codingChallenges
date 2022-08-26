// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
// Answer

function well(x){
    x = x.filter(e=> e == 'good')
    if(x.length == 0){return 'Fail!'}
    if(x.length<3){return 'Publish!'}
    if(x.length>2){return 'I smell a series!'}
  }