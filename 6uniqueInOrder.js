// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// Answer

var uniqueInOrder=function(iterable){

    const dupeFilter = (arr) => arr.filter(function(x,i,a){ //defines duplicate checking function
      return x !== a[i - 1]
    })
    
    if(Array.isArray(iterable)){ //checks for single character arrays
      return dupeFilter(iterable)
      
    }else{
      return dupeFilter(iterable.split('')) //otherwise splits string to array
    }
  }

  //refactor

  var uniqueInOrder=function(iterable){
    const dupeFilter = (arr) => arr.filter(function(x,i,a){
      return x !== a[i - 1]
    })
    return Array.isArray(iterable) ? dupeFilter(iterable) : dupeFilter(iterable.split(''))
  }