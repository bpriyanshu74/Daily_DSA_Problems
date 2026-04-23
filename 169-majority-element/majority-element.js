/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null, count = 0

    for(let num of nums){
        if(count == 0){
            candidate = num
        }

        if(num != candidate){
            count--
        }else{
            count++
        }
    }

    return candidate
};