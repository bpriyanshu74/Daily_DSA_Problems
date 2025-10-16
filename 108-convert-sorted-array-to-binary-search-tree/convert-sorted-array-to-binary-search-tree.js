/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length == 0) return null

    function dfs(l, r){
        if(l > r) return null
        let mid = l + Math.floor((r-l)/2)

        let root = new TreeNode(nums[mid])

        root.left = dfs(l, mid-1)
        root.right = dfs(mid+1, r)

        return root
    }

    return dfs(0, nums.length-1)
    
};