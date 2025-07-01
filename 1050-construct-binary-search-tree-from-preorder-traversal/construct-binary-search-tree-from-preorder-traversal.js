/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if(preorder.length == 0) return null
    let index = 0

    function construct(bound){
        if(index == preorder.length || preorder[index] > bound) return null

        let root = new TreeNode(preorder[index++])
        root.left = construct(root.val)
        root.right = construct(bound)

        return root
    }
    
    return construct(Infinity)

    
};