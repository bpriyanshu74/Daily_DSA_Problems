/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
   
    // solution is using i,j and then two pointers for rest of the array.

    //1. sort the array
    nums.sort((a,b) => a-b)

    let quads = [], n = nums.length

    for(let i=0; i<nums.length-3; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue
        for(let j=i+1; j<nums.length-2; j++){
            if(j > i+1 && nums[j] == nums[j-1]) continue
            let target2 = target - nums[i] - nums[j]

            let l = j+1, r = n-1

            while(l<r){
                let twosum = nums[l] + nums[r]
                if(twosum == target2){
                    let temp = [nums[i], nums[j], nums[l], nums[r]]
                    quads.push(temp)
                    while(l < r && nums[l] == temp[2]) l++
                    while(l < r && nums[r] == temp[3]) r--
                }
                else if(twosum < target2){
                    l++
                }
                else{
                    r--
                }
            }
        }
    }
    return quads
};