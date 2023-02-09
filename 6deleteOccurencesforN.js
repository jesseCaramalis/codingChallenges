// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

//Answer
// Function accepts an array of any length filled with integers. Accepts a positive integeter n.
// Returns an array of integers where duplicate numbers do not appear more than n times.
// result array should be in the same order as the original array.

// Examples
// sameOrderedMembers(deleteNth([20,37,20,21], 1), [20,37,21])
// sameOrderedMembers(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])

// Use hash map to store each number in array with a count, loop through array, check each loop if number
// is in hash map and is <= n. If true, push number to a result array.

function deleteNth(arr,n){
    let countObj = {}
    let resArr = []
    arr.forEach(x=>{
      countObj[x] = (countObj[x] || 0) +1
      if(countObj[x] <= n){
        resArr.push(x)
        }
    })
    return resArr
  }