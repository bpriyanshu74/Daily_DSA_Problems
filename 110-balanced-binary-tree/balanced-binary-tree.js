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

    function findh(node){
        if(node == null) return 0

        return 1 + Math.max(findh(node.left), findh(node.right))
    }

    if(root == null) return true

    let lh = findh(root.left)
    let rh = findh(root.right)

    if(Math.abs(rh-lh) > 1) return false

    let left = isBalanced(root.left)
    let right = isBalanced(root.right)

    if(!left || !right) return false

    return true
    
};