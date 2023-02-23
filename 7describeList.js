// Write function describeList which returns "empty" if the list is empty or "singleton" if it contains only one element or "longer"" if more.

// Answer

//use a ternary operator to return the correct string based on the length of the array.

const describeList = (x) => x.length == 0 ? 'empty' : x.length > 1 ? 'longer' : 'singleton'