/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let hashmap = new Map(), stack = []

    for(let num of nums2){
        while(stack.length && num > stack[stack.length-1]){
            hashmap.set(stack.pop(), num)
        }
        stack.push(num)
    }

    while(stack.length){
        hashmap.set(stack.pop(), -1)
    }

    for(let i=0; i<nums1.length; i++){
        nums1[i] = hashmap.get(nums1[i])
    }

    return nums1
};