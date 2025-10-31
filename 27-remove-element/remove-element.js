/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] == val){
            for(let j=i+1; j<nums.length; j++){
                if(nums[j] != val){
                    swap(i,j)
                    break
                }
            }
        }
    }

    function swap(x,y){
        [nums[x], nums[y]] = [nums[y], nums[x]]
    }

    for(let i=0; i<nums.length; i++){
        if(nums[i] == val) break
        count++
    }

    return count
};