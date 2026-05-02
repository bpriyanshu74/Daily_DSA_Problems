/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if(nums.length < 4) return []

    let ans = []

    nums.sort((a,b) => a - b)

    for(let i=0; i<nums.length-3; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue
        for(let j=i+1; j<nums.length-2; j++){
            if(j > i+1 && nums[j] == nums[j-1]) continue

            let l = j+1, r = nums.length-1

            while(l < r){
                let sum = nums[i] + nums[j] + nums[l] + nums[r]

                if(sum == target) {
                    ans.push([nums[i], nums[j], nums[l], nums[r]])
                    l++
                    r--

                    while(l < r && nums[l] == nums[l-1]) l++
                    while(l < r && nums[r] == nums[r+1]) r-- 
                } else if(sum < target){
                    l++
                }else{
                    r--
                }
            }
        }
    }
    return ans
};