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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
    function dfs(node, cursum){
        if(!node) return false
        if(!node.left && !node.right){
            return cursum + node.val == targetSum
        }
        return dfs(node.left, node.val+cursum) || dfs(node.right, node.val+cursum)
    }

    return dfs(root, 0)
};