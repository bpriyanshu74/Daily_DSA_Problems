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
var rightSideView = function(root) {
    if(!root) return []

    let res = []
    let q = [root]

    while(q.length){
        let level = []
        for(let i= q.length; i>0; i--){
            let node = q.shift()
            level.push(node.val)
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
        res.push(level[level.length-1])
    }
    return res
};