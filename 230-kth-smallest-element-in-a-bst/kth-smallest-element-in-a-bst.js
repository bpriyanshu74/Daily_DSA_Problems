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
    let count = 0, ans = null

    function inorder(node){
        if(!node || ans != null) return

        inorder(node.left)
        count++

        if(count == k){
            ans = node.val
            return
        }

        inorder(node.right)
    }

    inorder(root)
    return ans    
};