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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return null

    if(key < root.val){
        root.left = deleteNode(root.left, key)
    }else if(key > root.val){
        root.right = deleteNode(root.right, key)
    }else{
        if(!root.left) return root.right
        if(!root.right) return root.left

        let successor = root.right
        while(successor.left){
            successor = successor.left
        }
        root.val = successor.val

        root.right = deleteNode(root.right, successor.val)
    }

    return root
};