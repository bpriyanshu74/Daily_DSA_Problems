/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let sum_closest , diff = Infinity
    nums.sort((a,b) => a-b)
    for(let i=0; i<nums.length-2; i++){
        let l = i+1, r = nums.length-1

        while(l < r){
            let sum = nums[i] + nums[l] + nums[r]

            let dis

            if(sum > target){
                dis = sum - target
                r--
            }else{
                dis = target - sum
                l++
            }
            if(dis < diff){
                sum_closest = sum
                diff = dis
            } 
        }
    }
    return sum_closest
};