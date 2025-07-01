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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0
    function reverseInorder(node){
        if(!node) return 0

        reverseInorder(node.right)
        sum += node.val
        node.val = sum
        reverseInorder(node.left)

    }

    reverseInorder(root)
    return root
    
};