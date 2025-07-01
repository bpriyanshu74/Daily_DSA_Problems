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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    if(root == null) return null

    let inorder = []

    function collectInorder(node){
        if(!node) return

        collectInorder(node.left)
        inorder.push(node.val)
        collectInorder(node.right)
    }

    collectInorder(root)
    inorder.sort((a,b) => a-b)
    let index = {val: 0}

    function updateInorder(node, index){
        if(!node) return

        updateInorder(node.left, index)
        if(node.val != inorder[index.val]){
            node.val = inorder[index.val]
        }
        index.val++
        updateInorder(node.right, index)

    }
    updateInorder(root, index)

    return root
    
};