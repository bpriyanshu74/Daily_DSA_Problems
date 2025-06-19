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

    if(nums.length < 1) return null

    let l = 0, r = nums.length-1

    let middle = Math.floor((l+r)/2)

    let root = new TreeNode(nums[middle])

    let lefthalf = nums.slice(l,middle)
    let righthalf = nums.slice(middle+1)

    root.left = sortedArrayToBST(lefthalf)
    root.right = sortedArrayToBST(righthalf)

    return root
    
};