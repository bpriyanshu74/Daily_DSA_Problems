/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // using the monotonic stack
    let hashmap = new Map(), stack = []

    for(let ch of nums2){
        while(stack.length && ch > stack[stack.length-1]){
            hashmap.set(stack.pop(), ch)
        }
        stack.push(ch)
    }

    while(stack.length){
        hashmap.set(stack.pop(), -1)
    }

    return nums1.map(num => hashmap.get(num))
    
};