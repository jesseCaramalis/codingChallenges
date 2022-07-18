// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//Answer

function addBinary(a,b) {
    let int = a+b
    let arr = []
    while(int !== 0){
        arr.unshift(int%2)
        int = Math.floor(int/2)
    }
    return arr.join('')
}
//PREP
// PARAMETERS: two numbers, both non negative integers
// RESULT: the result of the addition of the two numbers in binary, as a string

//to convert to binary, the integer is divided by two repeatedly, noting the remainder everytime (including 0),
//until the quotient is 0. The remainders in reverse order of notation is the original integer in binary. 

//in JS, you would have to use both divide and modulus once for each step. 
//Use a while loop with the conditional being the integer being divided is not zero.
//Math.floor your rolling quotient each time, we don't want decimals and the remainder of our division is being recorded.


//function addBinary(a,b){
//     return (a+b).toString(2)
// }
//Apparently you can also use Number.toString() method, which accepts a radix parameter specifying the base to use for number conversion. Base 2 is binary.