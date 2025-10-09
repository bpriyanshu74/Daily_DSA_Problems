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
var sumNumbers = function(root) {

    function dfs(node, cursum){
        if(!node) return 0

        let newsum = cursum * 10 + node.val

        if(!node.left && !node.right) return newsum

        return dfs(node.left, newsum) + dfs(node.right, newsum)

    }
    

    return dfs(root, 0)
};