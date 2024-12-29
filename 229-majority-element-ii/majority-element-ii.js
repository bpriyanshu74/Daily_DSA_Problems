/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let ele1 = null, ele2 = null, count1 = 0, count2 = 0

    for(let i=0; i<nums.length; i++){
        if(count1 == 0 && ele2 != nums[i]){
            ele1 = nums[i]
            count1 = 1
        }
        else if(count2 == 0 && ele1 != nums[i]){
            ele2 = nums[i]
            count2 = 1
        }
        else if(ele1 == nums[i]) count1++
        else if(ele2 == nums[i]) count2++
        else{
            count1--
            count2--
        }
    }

    let res = []
    let mini = Math.floor(nums.length/3) 
    let cnt1 = 0, cnt2 = 0
    for(let i=0; i< nums.length; i++){
        if(nums[i] == ele1) cnt1++
        if(nums[i] == ele2) cnt2++
    }

    if(cnt1 > mini) res.push(ele1)
    if(cnt2 > mini) res.push(ele2)

    return res


    
};