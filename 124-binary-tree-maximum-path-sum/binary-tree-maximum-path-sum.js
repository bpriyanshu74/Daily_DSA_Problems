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
    if(root == null) return 0
    let maxm = -100000000
    dfs(root)
    return maxm

    function dfs(root){
        if(root == null) return 0

        let left = dfs(root.left)
        let right = dfs(root.right)

        if(left < 0) left = 0
        if(right < 0) right = 0

        maxm = Math.max(maxm, left+right+root.val)

        return root.val + Math.max(left,right)

    }

    
};