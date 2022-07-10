// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// Answer

function arrayDiff(a, b) {
    //filter array a, with the filter conditional being if the element doesn't exist in array b.
    return a.filter(element => !b.includes(element))
    }

//refactor
const arrayDiff = (a, b) => a.filter(element => !b.includes(element))
//prep
//Parameter: two arrays, a & b. Can be any length. Can be empty arrays.
//Return: Returns array a, minus any elements that are present in array b. Array a should keep it's order. 
//Example: (arrayDiff([1,2,2], [1]) returns [2,2]