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
    diameter(root)
    
    function diameter(root){
        if(root == null) return 0

        let lefth = findh(root.left)
        let righth = findh(root.right)

        maxm = Math.max(maxm, lefth+righth)

        diameter(root.left)
        diameter(root.right)
    }

    function findh(root){
        if(root == null) return 0

        return 1 + Math.max(findh(root.left), findh(root.right))
    }

    return maxm
    
};