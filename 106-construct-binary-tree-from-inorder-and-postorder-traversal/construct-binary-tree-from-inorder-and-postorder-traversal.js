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
    let postindex = postorder.length-1

    let inorder_map = new Map()

    for(let i=0; i<inorder.length; i++){
        inorder_map.set(inorder[i], i)
    }

    function build(start, end){
        if(start > end) return null

        let rootval = postorder[postindex--]
        let root = new TreeNode(rootval)

        let partition = inorder_map.get(rootval)

        root.right = build(partition+1, end)
        root.left = build(start, partition-1)
        

        return root 
    }
    return build(0, inorder.length-1)
};