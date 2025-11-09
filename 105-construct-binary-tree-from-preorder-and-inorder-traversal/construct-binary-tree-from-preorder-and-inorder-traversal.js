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
    let map = {}

    for(let i=0; i<inorder.length; i++){
        map[inorder[i]] = i
    }
    let preindex = 0

    function build(x,y){
        if(x > y) return null
        let rootval = preorder[preindex++]
        let root = new TreeNode(rootval)


        let mid = map[rootval]
        
        root.left = build(x, mid-1)
        root.right = build(mid+1,y)

        return root
        
    }
    return build(0,inorder.length-1) 
};