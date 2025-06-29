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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let counter = 0, result = null

    function traversal(node){
        if(node == null || result != null) return

        traversal(node.left)

        counter++
        if(counter == k){
            result = node.val
            return
        }

        traversal(node.right)
    }

    traversal(root)
    return result
    
};