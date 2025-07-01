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

    if(root.val == key){
        if(!root.left) return root.right
        if(!root.right) return root.left

        let rightside = root.right
        let newroot = root.left
        let rightmost = newroot

        while(rightmost.right){
            rightmost = rightmost.right
        }
        rightmost.right = rightside

        return newroot
    }
    else if(root.val < key){
        root.right =  deleteNode(root.right, key)
    }
    else{
        root.left =  deleteNode(root.left, key)
    }

    return root
    
};