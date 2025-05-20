/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let l=0,r=0, window = 0, window_zero_count = 0
    while(r < nums.length){
        if(nums[r] == 1){
            r++ 
            continue
        }
        else if(nums[r] == 0){
            window_zero_count++
            if(window_zero_count <= k){
                r++
                continue
            }
            else{
                window = Math.max(window, r-l)
                while(window_zero_count != k){
                    if(nums[l] == 0){
                        window_zero_count--      
                    }
                    l++
                }
            }
        }
        r++
    }
    return Math.max(window, r-l)
    
};