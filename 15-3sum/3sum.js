/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = new Set()
    nums.sort((a,b) => a-b)

    for(let i=0; i<nums.length-2; i++){
        let l = i+1, r = nums.length-1
        while(l < r){
            let sum = nums[i] + nums[l] + nums[r]
            if(sum == 0){
                let triplet = [nums[i], nums[l], nums[r]].toString()
                if(!ans.has(triplet)){
                    ans.add(triplet)
                }
                l++
                r--
            }else if(sum < 0){
                l++
            }else{
                r--
            }
        }
    }
    return Array.from(ans).map(str => str.split(',').map(Number))
    
};