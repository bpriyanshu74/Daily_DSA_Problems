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
 * @return {number}
 */
var countNodes = function(root) {
    if(root == null) return 0

    let count = 0, q = [root]

    while(q.length){
        count += 1
        let node = q.shift()

        if(node.left) q.push(node.left)
        if(node.right) q.push(node.right)
    }

    return count
    
};