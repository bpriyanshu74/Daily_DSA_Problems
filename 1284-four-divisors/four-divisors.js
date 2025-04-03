/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let total = 0
    for(let i=0; i<nums.length; i++){
        let count = 0, tempsum = 0
        for(let div=1; div<= nums[i]; div++){
            if(count > 4) break

            if(nums[i] % div == 0){
                count++
                tempsum += div
            }
        }
        if(count == 4) total+= tempsum
    }
    return total
    
};