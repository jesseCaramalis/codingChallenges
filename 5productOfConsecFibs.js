// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.

// Some Examples of Return:
// (depend on the language)

// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----

// Answer

/* 
Input is a positive integer  of any size prod.

Output is an array with either: 2 consecutive fibonacci numbers and true, if prod is the product of those two numbers, or:
2 consecutive fibonacci numbers and false, if prod cannot be the product of two consecutive numbers. In this case, the numbers returned
in the array are the smallest consecutive numbers that are greater than prod.

First establish a fibonacci function that returns the nth fibonacci number.

Create a loop with an incrementing number i, that calls a recursive fibonacci function every loop for i and i+1. Check the product
of the two numbers returned, if equal to prod, return two nums and true. If the product is greater than prod, return the two nums and false.
*/

function productFib(prod){
  
    const fib = function(n){
      if(n<2){return n}
      else{
        return (fib(n-1)+fib(n-2))
      }
    };
    
    for(let i = 0; i>=0; i++)
      {
        if(fib(i)*fib(i+1) === prod)
          {return [fib(i),fib(i+1), true]}
          
        if(fib(i)*fib(i+1) > prod)
          {return [fib(i),fib(i+1), false]}
      }
  }