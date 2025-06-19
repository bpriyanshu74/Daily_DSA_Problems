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
var diameterOfBinaryTree = function(root) {
    if(root == null) return 0
    let maxm = 0

    findh(root)

    return maxm
    

    function findh(root){
        if(root == null) return 0

        let left = findh(root.left)
        let right = findh(root.right)

        maxm = Math.max(maxm, left+right)

        return 1 + Math.max(left,right)
    }

    
    
};