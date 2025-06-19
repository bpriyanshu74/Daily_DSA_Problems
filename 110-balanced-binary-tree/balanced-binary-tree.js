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
var isBalanced = function(root) {

    if(root == null) return true

    return helper(root) != -1
};

function helper(node){
    if(node == null) return 0

    let left = helper(node.left)

    if(left === -1) return -1

    let right = helper(node.right)

    if(right === -1) return -1

    if(Math.abs(left-right) > 1) return -1

    return 1 + Math.max(left,right)
}

