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
    if(root == null) return []

    let q = [], ans = [], flag = 0
    q.push(root)

    while(q.length){
        let size = q.length, level = []
        for(let i=0; i<size; i++){
            let node = q.shift()
            level.push(node.val)
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
        if(flag == 0){
            ans.push(level)
            flag = 1
        }
        else{
            ans.push(level.reverse())
            flag = 0
        }
    }
    return ans
    
};