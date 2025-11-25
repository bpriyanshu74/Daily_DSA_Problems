/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let n = nums1.length, m = nums2.length, maxl = 0

    let dp = Array.from({length: n+1}, () => new Array(m+1).fill(0))

    for(let i=1; i<=n; i++){
        for(let j=1; j<=m; j++){
            if(nums1[i-1] == nums2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1]
                maxl = Math.max(maxl, dp[i][j])
            }
        }
    }
    return maxl
    
};