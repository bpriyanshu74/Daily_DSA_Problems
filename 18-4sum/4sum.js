/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if(nums.length < 4) return []
    let quads = new Set()
    nums.sort((a,b) => a-b)

    for(let i=0; i<nums.length-3; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue

        for(let j=i+1; j<nums.length-2; j++){
            if(j > i+1 && nums[j] == nums[j-1]) continue
            
            for(let k=j+1; k<nums.length-1; k++){
                if(k > j+1 && nums[k] == nums[k-1]) continue

                for(let p=k+1; p<nums.length; p++){
                    if(p > k+1 && nums[p] == nums[p-1]) continue

                    let sum = nums[i] + nums[j] + nums[k] + nums[p]
                    if(sum == target){
                        let quad_key = [nums[i], nums[j], nums[k], nums[p]].toString()
                        quads.add(quad_key)
                    }
                }
            }
        }
    }
    return Array.from(quads).map(q => q.split(',').map(Number))
};