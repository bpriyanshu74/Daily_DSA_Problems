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
 * @return {TreeNode}
 */
var convertBST = function(root) {

    function inorderCollect(node){
        if(!node) return
        inorderCollect(node.left)
        inorder.push(node.val)
        inorderCollect(node.right)
    }

    let inorder = []
    inorderCollect(root)
    let acc_sum = 0
    for(let i=inorder.length-1; i>= 0; i--){
        acc_sum += inorder[i]
        inorder[i] = acc_sum
    }

    let index = {val: 0}

    function dfsUpdate(node, index){
        if(!node) return

        dfsUpdate(node.left, index)
        node.val = inorder[index.val]
        index.val++
        dfsUpdate(node.right, index)
    }

    dfsUpdate(root, index)

    return root
    
};