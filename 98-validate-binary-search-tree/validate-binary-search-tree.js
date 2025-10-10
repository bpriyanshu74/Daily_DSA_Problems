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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root) return true

    function dfs(node, lmax, rmax){
        if(!node) return true
        if(node.val <= lmax || node.val >= rmax) return false

        if(!node.left && !node.right){
            return true
        }
        let left = dfs(node.left, lmax, node.val)
        let right = dfs(node.right, node.val, rmax)

        return left && right
    }

    return dfs(root,-Infinity, Infinity)
};