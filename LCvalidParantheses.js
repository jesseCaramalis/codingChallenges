// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// Answer
// stack array will store opening parentheses (par). pairs object stores the par combinations with closing as the key.
// iterate through the string, if character is a closing par (present in the keys of the pairs object),
// check if stack is empty, or remove the last added opening par from the stack and check if it doesn't match.  
// Return false if either is true. Otherwise if current character is opening par, add to stack.
// after looping, all opening parentheses should be popped off the stack. if not and length !== 0, false will also be returned.

function isValid(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] in pairs) { //checks if closing or opening par
            if (stack.length === 0 || stack.pop() !== pairs[s[i]]) { //if stack is empty then par order is wrong, otherwise remove opening from stack and check for correct pair.
                return false;
            }
        } else { // if opening par then it's added to stack.
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
}
