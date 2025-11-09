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
    let map = {}

    for(let i=0; i<inorder.length; i++){
        map[inorder[i]] = i
    }

    let postindex = postorder.length-1

    function build(i,j){
        if(i > j) return null

        let rootval = postorder[postindex--]

        let root = new TreeNode(rootval)

        let mid = map[rootval]

        root.right = build(mid+1, j)
        root.left = build(i,mid-1)

        return root
    }

    return build(0, inorder.length-1)
};