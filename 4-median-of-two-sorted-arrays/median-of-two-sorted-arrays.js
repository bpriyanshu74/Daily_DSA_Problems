/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)

    let m = nums1.length, n = nums2.length, totalleft = Math.floor((m+n+1)/2)

    let l = 0, r = m

    while(l <= r){
        let i = l + Math.floor((r-l)/2)
        let j = totalleft - i

        let l1 = (i > 0) ? nums1[i-1]: -Infinity
        let r1 = (i < m) ? nums1[i]: Infinity

        let l2 = (j > 0) ? nums2[j-1]: -Infinity
        let r2 = (j < n) ? nums2[j]: Infinity

        if(l1 <= r2 && l2 <= r1){
            // valid combination found
            if((m+n) % 2 == 0){
                return (Math.max(l1, l2) + Math.min(r1, r2))/2
            }else{
                return Math.max(l1, l2)
            }
        }
        else if(l1 > r2){
            r = i-1
        }else{
            l = i+1
        }
    }
    return 0

};