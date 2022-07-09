// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


//Answer

function findOdd(arr) {
    for(i=0;i<arr.length;i++){
        let checkArr = arr.filter(element => element == arr[i])
        if(checkArr.length % 2 !== 0){
            return arr[i]
        }
    }
}
    //for each element in arrray
    //conditional: if element has already been filtered, go to next one. 
    //Can just keep filtering through array until filter conditional is met
    //filter: filter that array by that element to new array
    //conditional: count length of new array and return that element if length is odd
