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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    let preindex = 0
    let postmap = new Map()

    for(let i=0; i<postorder.length; i++){
        postmap.set(postorder[i], i)
    }

    function build(start, end){
        if(preindex >= preorder.length || start > end) return null

        let rootval = preorder[preindex++]
        let root = new TreeNode(rootval)

        if (start === end) return root;

        let leftroot = preorder[preindex]
        let leftroot_index = postmap.get(leftroot)

        root.left = build(start, leftroot_index)
        root.right = build(leftroot_index+1, end-1)

        return root
    }

    return build(0, postorder.length-1)
    
};