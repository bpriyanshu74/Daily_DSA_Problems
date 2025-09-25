/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closest = Infinity, absdiff = Infinity
    nums.sort((a,b) => a-b)

    for(let i=0; i<nums.length-2; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue

        let l=i+1, r = nums.length-1

        while(l < r){
            let sum = nums[i] + nums[l] + nums[r]
            if(sum == target){
                return sum
            }

            let temp = Math.max(target, sum) - Math.min(target, sum)
            if(temp < absdiff){
                closest = sum
                absdiff = temp
            }

            if(sum < target){
                while(l<r && nums[l] == nums[l+1]) l++
                l++
            }else{
                while(l<r && nums[r] == nums[r-1]) r--
                r-- 
            }    
        }
    }

    return closest
    
};