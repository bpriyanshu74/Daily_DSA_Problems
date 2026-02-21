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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    function dfs(node){
        if(!node) return 

        ans.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }

    let ans = []
    dfs(root)
    return ans
};