/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b)
    return ksum(nums, target, 4, 0)

    function ksum(nums, target, k , start){
        let res = []
        if(k == 2){
            let l = start, r = nums.length-1

            while(l < r){
                let sum = nums[l] + nums[r]
                if(sum == target){
                    res.push([nums[l], nums[r]])
                    while(l < r && nums[l] == nums[l+1]) l++
                    while(l < r && nums[r] == nums[r-1]) r--
                    l++
                    r--
                }else if(sum < target){
                    l++
                }else{
                    r--
                }
            }
            return res
        }

        for(let i=start; i<=nums.length-k; i++){
            // skipping duplicates
            if(i > start && nums[i] == nums[i-1]) continue
            //pruning
            if(nums[i] + (k-1)*nums[nums.length-1] < target) continue
            if(nums[i] + (k-1)*nums[nums[i+1]] > target) break

            let subresponse = ksum(nums, target-nums[i], k-1, i+1)

            for(let arr of subresponse){
                res.push([nums[i], ...arr])
            }
        }
        return res
    }
};