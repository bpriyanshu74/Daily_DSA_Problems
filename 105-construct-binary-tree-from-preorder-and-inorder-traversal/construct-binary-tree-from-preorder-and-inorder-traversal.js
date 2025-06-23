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
    let map = new Map()

    for(let i=0; i<inorder.length; i++){
        map.set(inorder[i], i)
    }

    let root = helper(inorder, 0, inorder.length-1, preorder, 0, preorder.length-1, map)

    return root

    function helper(ino, instart, inend, pre, prestart, preend, map){
        if(instart > inend || prestart > preend) return null

        let root = new TreeNode(pre[prestart])
        let rootindex = map.get(root.val)

        let numsleft = rootindex - instart

        root.left = helper(ino, instart, rootindex-1, pre, prestart+1, prestart+numsleft, map)
        root.right = helper(ino, rootindex+1, inend, pre, prestart+numsleft+1, preend, map)


        return root
    }
    
};