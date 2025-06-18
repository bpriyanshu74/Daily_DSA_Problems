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
var maxDepth = function(root) {

    function dfs(root){
        if(root == null) return 0
        let left = dfs(root.left)
        let right = dfs(root.right)

        return 1 + Math.max(left,right)
    }

    let ans = dfs(root)

    return ans
    
};