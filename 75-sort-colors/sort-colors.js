/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let temparr = new Array(3).fill(0)
    for(let i=0; i< nums.length; i++){
        temparr[nums[i]]++
    }

    for(let i=0; i< nums.length; i++){
        if(temparr[0] > 0){
            nums[i] = 0
            temparr[0]--
        }
        else if(temparr[1] > 0){
            nums[i] = 1
            temparr[1]--
        }
        else if(temparr[2] > 0){
            nums[i] = 2
            temparr[2]--
        }
        else{
            break
        }
    }
    
};