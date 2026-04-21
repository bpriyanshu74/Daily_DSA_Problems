/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // here we can use index array

    let temp = new Array(nums.length).fill(0)

    for(let num of nums){
        if(temp[num] == 1) return num

        temp[num] = 1
    }
    
};