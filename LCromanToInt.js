/**
 * @param {string} s
 * @return {number}
 * store values for each symbol as consts
 * split input string into array
 * make counter var
 * iterate over array adding to counter array according to consts
 * conditionals - if X or a V is preceeded by one I, -1 off count instead
                - if L or a C is preceeded by one X, -10 off count instead
                - if D or a M is preceeded by one C, -100 off count
 */
                var romanToInt = function(s) {
                    const 'I' = 1, 'V' = 5, 'X' = 10, 'L' = 50, 'C' = 100, 'D' = 500, 'M' = 1000
                    let arr = s.split('')
                    let result = 0
                    arr.forEach((x,i)=>{
                        result += arr[i]
                    })
                    return result
                
                };
                romanToInt('VIII')