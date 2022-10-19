// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// Answer

// filter array for evens, if there's more than one even then return the array filtered for odds instead.
// otherwise return evens[0] (has to be the even number filtered from odd array)
function findOutlier(integers){
    let evens = integers.filter(x=> x%2 == 0)
    if(evens.length > 1){
      return integers.filter(x=>x%2 !== 0)[0]
    }
    else{
      return evens[0]
    }
  }