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
    function dfs(node){
        if(!root) return 0
        let lh = 0, rh = 0
        if(node.left){
            lh = dfs(node.left)
        }
        if(node.right){
            rh = dfs(node.right)
        }

        return 1 + Math.max(lh, rh)
    }

    return dfs(root)
};