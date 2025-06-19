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
 * @return {boolean}
 */
var isBalanced = function(root) {

    function findh(node){
        if(node == null) return 0
        let lh = findh(node.left)
        let rh = findh(node.right)

        if(lh==-1 || rh == -1) return -1
        if(Math.abs(lh-rh) > 1) return -1

        return 1 + Math.max(lh,rh)
    }

    if(root == null) return true

    let lh = findh(root.left)
    let rh = findh(root.right)

    if((lh == -1 || rh == -1) || (Math.abs(lh-rh) > 1)) return false

    return true


    
};