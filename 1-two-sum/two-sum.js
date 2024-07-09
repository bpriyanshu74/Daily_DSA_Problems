/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let temp = []
    for(let i= 0; i<nums.length; i++){
        let req = target - nums[i]
        
        
        if(temp.includes(req)){
            return [i,temp.indexOf(req)]
        }
        else{
            temp[i] = nums[i]
        }
    }
    
};