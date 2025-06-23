/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    if (inorder.length !== postorder.length || inorder.length === 0) return null;

    const indexMap = new Map();
    inorder.forEach((val, idx) => indexMap.set(val, idx));

    function helper(inStart, inEnd, postStart, postEnd) {
        if (inStart > inEnd || postStart > postEnd) return null;

        const rootVal = postorder[postEnd];
        const root = new TreeNode(rootVal);

        const inRootIdx = indexMap.get(rootVal);
        const leftSize = inRootIdx - inStart;

        root.left = helper(inStart, inRootIdx - 1, postStart, postStart + leftSize - 1);
        root.right = helper(inRootIdx + 1, inEnd, postStart + leftSize, postEnd - 1);

        return root;
    }

    return helper(0, inorder.length - 1, 0, postorder.length - 1);
    
};