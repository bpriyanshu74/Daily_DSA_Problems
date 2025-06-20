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
var isSymmetric = function(root) {
    return root == null || helper(root.left, root.right)

    function helper(left, right){
        if(left == null || right == null){
            return left == right
        }
        if(left.val != right.val) return false

        return helper(left.right, right.left) && helper(left.left, right.right)
    }


};