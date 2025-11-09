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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if(!root) return 0

    function dfs(node){
        if(!node) return 0

        let left = dfs(node.left)
        let right = dfs(node.right)
        diameter = Math.max(diameter, left+right)

        return 1 + Math.max(left, right)
    }

    let diameter = -Infinity
    dfs(root)
    return diameter == Infinity ? 0 : diameter
};