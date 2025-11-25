/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let ans = nums[0]
    let maxprod = nums[0]
    let minprod = nums[0]

    for(let i=1; i<nums.length; i++){
        let num = nums[i]
        if(num < 0){
            [maxprod, minprod] = [minprod, maxprod]
        }

        maxprod = Math.max(num, num*maxprod)
        minprod = Math.min(num, num * minprod)

        ans = Math.max(ans, maxprod)
    }

    return ans
};