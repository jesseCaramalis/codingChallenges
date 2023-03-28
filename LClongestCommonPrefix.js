// 14. Longest Common Prefix
// Easy
// 13.2K
// 3.8K
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// Answer

// create var prefix, which will initially be the first string in the array.
// this string is checked against all other strings, starting from the second.
// for each string, use indexOf to see if current prefix is a prefix of the current string.
// if not, remove the last character from prefix and try again until the prefix fits the current string or returns ''

// time complexity of O(n), where n is the total number of characters in all string as a worst case.

function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) { // indexOf the prefix should be 0 if present, if not continues to remove 1 character.
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") {
                return "";
            }
        }
    }
    return prefix;
}