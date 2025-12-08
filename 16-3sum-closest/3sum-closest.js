/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let ans = Infinity, mindiff = Infinity
    nums.sort((a,b) => a-b)

    for(let i=0; i<nums.length-2; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue

        let p1 = i+1, p2 = nums.length-1

        while(p1 < p2){
            let sum = nums[i] + nums[p1] + nums[p2]
            let diff = Math.abs(target - sum)

            if(sum == target) return sum

            if(diff < mindiff){
                mindiff = diff
                ans = sum
            }

            if(sum < target){
                p1++
                while(p1 < p2 && nums[p1] == nums[p1-1]) p1++
            }else{
                p2--
                while(p1 < p2 && nums[p2] == nums[p2+1]) p2--
            }
        }
    }
    return ans
};