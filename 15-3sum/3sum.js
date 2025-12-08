/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let triplets = []
    nums.sort((a,b) => a-b)

    for(let i=0; i<nums.length-2; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue

        let p1 = i+1, p2 = nums.length-1

        while(p1 < p2){
            let sum = nums[i] + nums[p1] + nums[p2]

            if(sum == 0){
                triplets.push([nums[i], nums[p1], nums[p2]])
                p1++
                p2--

                while(p1 < p2 && nums[p1] == nums[p1-1]) p1++
                while(p1 < p2 && nums[p2] == nums[p2+1]) p2-- 
            }
            else if(sum < 0){
                p1++
            }else{
                p2--
            }
        }
    }
    return triplets
};