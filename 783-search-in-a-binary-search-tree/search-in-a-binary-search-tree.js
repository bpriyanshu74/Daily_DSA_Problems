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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {

    function dfs(node, target){
        if(!node) return null
        if(node.val == target) return node

        if(target > node.val){
            return dfs(node.right, target)
        }else{
            return dfs(node.left, target)
        }
    }

    return dfs(root,val)
};