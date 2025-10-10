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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return []

    let res = []
    let left_to_right = true
    let q = [root]

    while(q.length){
        let level = [], size = q.length
        for(let i=0; i < size; i++){
            let node = q.shift()
            level.push(node.val)
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
        if(left_to_right){
            res.push(level)
        }else{
            res.push(level.reverse())
        }
        left_to_right = !left_to_right
    }

    return res
    
};