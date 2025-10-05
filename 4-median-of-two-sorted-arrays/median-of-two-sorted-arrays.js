/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length, n2 = nums2.length, total = n1 + n2
    let mid1 = Math.floor(total-1 / 2)
    let mid2 = Math.floor(total/2)

    let cur = 0, prev = 0, count = 0, i=0, j = 0

    while(count <= mid2){
        prev = cur

        if(i < n1 && (j >= n2 || nums1[i] <= nums2[j])){
            cur = nums1[i++]
            count++
        }else{
            cur = nums2[j++]
            count++
        }
    }

    return total%2 == 0 ? (prev + cur)/2 : cur
};