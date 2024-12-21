/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let left=0, right=0, arr3 = [], index = 0

    while(left < m && right < n){
        if(nums1[left] <= nums2[right]){
            arr3[index] = nums1[left]
            left++
            index++
        }
        else{
            arr3[index] = nums2[right]
            right++
            index++
        }
    }

    while(left < m){
        arr3[index++] = nums1[left++]
    }
    while(right < n){
        arr3[index++] = nums2[right++]
    }

    for(let i=0; i< arr3.length; i++){
        nums1[i] = arr3[i]
    }
    
};