/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let nums = []

    function traversal(root){
        if(root == null) return
        nums.push(root.val)
        traversal(root.left)
        traversal(root.right)
    }
    traversal(root)

    nums.sort((a,b) => a-b)

    return nums[k-1]

    


    
};