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

    let l = 0, r = nums.length-1

    let mid = Math.floor((r+l)/2)

    let root = new TreeNode(nums[mid])

    let lefthalf = nums.slice(l, mid)
    let righthalf = nums.slice(mid+1)

    root.left = sortedArrayToBST(lefthalf)
    root.right = sortedArrayToBST(righthalf)

    return root
    
};