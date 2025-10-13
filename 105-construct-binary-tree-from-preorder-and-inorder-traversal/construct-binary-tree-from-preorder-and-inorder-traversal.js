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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let preindex = 0
    let inorder_map = new Map()

    for(let i=0; i<inorder.length; i++){
        inorder_map.set(inorder[i], i)
    }

    function build(start, end){
        if(start > end) return null

        let rootval = preorder[preindex++]
        let pivot = inorder_map.get(rootval)

        let root = new TreeNode(rootval)

        root.left =  build(start, pivot-1)
        root.right = build(pivot+1, end)

        return root
    }

    return build(0, inorder.length-1)
};