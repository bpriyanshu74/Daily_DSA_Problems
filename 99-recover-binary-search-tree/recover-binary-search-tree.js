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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let first = null, second = null, prev = null;

    function inorder(node) {
        if (!node) return;

        inorder(node.left);

        if (prev && prev.val > node.val) {
            if (!first) first = prev;
            second = node;
        }

        prev = node;

        inorder(node.right);
    }

    inorder(root);

    // swap the values of the two wrong nodes
    [first.val, second.val] = [second.val, first.val];
    
};