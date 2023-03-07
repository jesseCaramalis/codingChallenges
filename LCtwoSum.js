// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

 

// Constraints:

//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.

 
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// Answer

var twoSum = function(nums, target) {
    for(let i = 0; i<nums.length;i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
};

//refactor using hash map instead of nested loops
//we are creating an object with the value as the key and the index as the value
//we then check if the target-current value is in the object, if it is, then these are the two nums
//otherwise we add the current value to the object with the index as the value

var twoSum = function(nums, target) {
    let obj = {}
    for(let i = 0;i< nums.length; i++){ //loop through array
        let n = nums[i] //set n to current value for better readability
        if(obj[target-n] !== undefined) { //if the target-n value is in the object, we have found the pair
            return [obj[target-n], i]
        }
        obj[n] = i //if not, add the value to the object with the index as the value
    }
    return obj
};