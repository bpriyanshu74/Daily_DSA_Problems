/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let temp = [], n1 = nums1.length, n2 = nums2.length

    if(nums1.length < 1) temp = nums2
    else if(nums2.length < 1) temp = nums1
    else{
        let i=0, j =0
        while(i < n1 && j < n2){
            if(nums1[i] <= nums2[j]){
                temp.push(nums1[i])
                i++
            }else{
                temp.push(nums2[j])
                j++
            }
        }
        while(i < n1){
            temp.push(nums1[i])
            i++
        }
        while(j < n2){
            temp.push(nums2[j])
            j++
        }
    }
    let total = temp.length

    if(total % 2 == 0){
        return (temp[total/2] + temp[(total/2) - 1])/2
    }else{
        return temp[Math.floor(total / 2)];
    }
};