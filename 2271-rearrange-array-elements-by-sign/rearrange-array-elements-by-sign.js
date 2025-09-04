/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    // even index for even numbers
    // odd index for negative numbers
    let n = nums.length
    let temp = new Array(n).fill(0),x=0,y=1

    for(let i=0; i<n; i++){
        if(nums[i] >= 0){
            temp[x] = nums[i]
            x += 2
        }else{
            temp[y] = nums[i]
            y += 2
        }
    }

    return temp
    
};