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
var maxPathSum = function(root) {
    function dfs(node){
        if(!node) return 0

        let lsum = Math.max(0, dfs(node.left))
        let rsum = Math.max(0, dfs(node.right))

        maxsum = Math.max(maxsum, node.val+lsum+rsum)

        return node.val + Math.max(lsum, rsum)
    }

    let maxsum = -Infinity
    dfs(root)
    return maxsum
};