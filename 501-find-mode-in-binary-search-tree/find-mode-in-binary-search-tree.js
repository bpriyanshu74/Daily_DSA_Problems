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
 * @return {number[]}
 */
var findMode = function(root) {
      let prev = null;
    let count = 0;
    let maxCount = 0;
    let modes = [];

    function inorder(node) {
        if (!node) return;

        inorder(node.left);

        // process current node
        if (prev && prev.val === node.val) {
            count++;
        } else {
            count = 1;
        }

        if (count > maxCount) {
            maxCount = count;
            modes = [node.val];  // new mode
        } else if (count === maxCount) {
            modes.push(node.val);  // additional mode
        }

        prev = node;
        inorder(node.right);
    }

    inorder(root);
    return modes;
    
};