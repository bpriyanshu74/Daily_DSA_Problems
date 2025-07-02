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
var inorderTraversal = function(root) {
    // morris traversal inorder

    let inorder = []
    let cur = root

    while(cur){
        if(cur.left == null){
            inorder.push(cur.val)
            cur = cur.right
        }
        else{
            let prev = cur.left
            while(prev.right && prev.right != cur){
                prev = prev.right
            }
            if(prev.right != cur){
                prev.right = cur
                cur = cur.left
            }
            else{
                prev.right = null
                inorder.push(cur.val)
                cur = cur.right
            }
        }
    }

    return inorder
    
};