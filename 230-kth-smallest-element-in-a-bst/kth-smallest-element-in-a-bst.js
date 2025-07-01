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
    let counter = 0, result = null

    function dfs(node){
        if(!node) return

        dfs(node.left)
        if(counter == k-1){
            result = node
        }
        counter++
        dfs(node.right)
    }

    dfs(root)
    return result.val
    
};