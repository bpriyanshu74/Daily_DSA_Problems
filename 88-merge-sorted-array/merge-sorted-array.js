/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let left = 0, right = 0

while(left < m && right < n){
  if(nums1[left] <= nums2[right]){
    left++
  }
  else{
    [nums1[left], nums2[right]] = [nums2[right], nums1[left]]
    nums2.sort((a,b) => a-b)
    left++
  }
}

while(left < (m+n) && right < n){
  nums1[left] = nums2[right]
  left++
  right++
}

    
    
};