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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root) return true

    function validate(node, lower, upper){
        if(!node) return true

        if(node.val <= lower || node.val >= upper) return false

        return validate(node.left, lower, node.val) && validate(node.right, node.val, upper)
    }

    return validate(root, -Infinity, Infinity)
    
};