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

    let q = [root], dir = 1, front = 0

    while(front < q.length){
        let size = q.length - front, level = []

        for(let i=0; i<size; i++){
            let node = q[front++]

            level.push(node.val)

            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }

        if(dir == 1){
            res.push([...level])
        }else{
            let rev = level.reverse()
            res.push([...rev])
        }

        dir *= -1
    }

    return res
};