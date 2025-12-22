/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let k = nums1.length-1

    let s1 = m-1, s2 = n-1

    while(s1>=0 && s2 >= 0){
        if(nums1[s1] >= nums2[s2]){
            nums1[k--] = nums1[s1]
            s1--
        }else{
            nums1[k--] = nums2[s2]
            s2--
        }
    }

    while(s1 >= 0){
        nums1[k--] = nums1[s1]
        s1--
    }

    while(s2 >= 0){
        nums1[k--] = nums2[s2]
        s2--
    }

    return nums1
};