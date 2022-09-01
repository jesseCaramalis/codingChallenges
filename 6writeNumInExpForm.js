// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// Answer

function expandedForm(num) {
    //split num into sub nums
    
    let nums = num.toString().split('').map(Number)
    let arr = []
    nums.forEach((el,ind,array)=>{
        arr.push(nums[ind]*Math.pow(10,(array.length-(ind+1))))
      })
    return arr.filter(x=> x !== 0).join(' + ')
    }
  