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
    if(!root) return 0

    let q = [root], count = 0

    while(q.length){
        count++
        let node = q.shift()

        if(node.left) q.push(node.left)
        if(node.right) q.push(node.right)
    }

    return count
};