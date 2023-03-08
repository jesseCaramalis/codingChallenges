// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?

// Answer

// basic solution is to convert integer to string and split as seperate array var. compare array.reverse() product to original array.
// if they're the same then it's a palindrome.

// this solution has O(n) complexity, and would struggle with very large numbers.

var isPalindrome = function(x) {
    let array = x.toString()
    let reverseArray = array.split('').reverse().join('')
    return array === reverseArray ? true : false    
};

// without converting the int to a string, a loop can be used to loop through the integer. Whereas the above has O(n) complexity,
// this solution is O(log(n)) complexity, which will scale better at larger integers.
var isPalindrome = function(x) {
    if (x < 0) return false; // negative numbers are not palindromes
    let original = x;
    let reversed = 0;
    while (x > 0) { //this loop adds adds the digits to reversed from the right, as num%10 is the rightmost digit.
      reversed = (reversed * 10) + (num % 10); //shifts reversed to the left by multiplying by 10, adds the rightmost.
      num = Math.floor(num / 10); //removes the rightmost from number, and loops to 0
    }
    return original === reversed;
  }
