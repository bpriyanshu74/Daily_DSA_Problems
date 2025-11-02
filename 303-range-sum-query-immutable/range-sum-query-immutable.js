/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let sum = 0
    let prefix = new Array(this.nums.length).fill(0)

    for(let i=0; i<this.nums.length; i++){
        sum += this.nums[i]
        prefix[i] = sum
    }

    return prefix[right] - (prefix[left-1] || 0)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */