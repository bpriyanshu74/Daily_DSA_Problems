/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [], map = {}, ans = []

    for(let num of nums2){
        while(stack.length && num > stack[stack.length-1]){
            map[stack.pop()] = num
        }
        stack.push(num)
    }

    while(stack.length){
        map[stack.pop()] = -1
    }

    for(let i=0; i<nums1.length; i++){
        ans.push(map[nums1[i]])
    }
    return ans
};