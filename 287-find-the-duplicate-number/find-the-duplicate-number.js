/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[0], fast = nums[0]

    // detecting cycle

    do{
        slow = nums[slow]
        fast = nums[nums[fast]]
    }while(slow != fast)

    // detecting entry point for duplicate

    slow = nums[0]

    while(slow != fast){
        slow = nums[slow]
        fast = nums[fast]
    }

    return slow
    
};