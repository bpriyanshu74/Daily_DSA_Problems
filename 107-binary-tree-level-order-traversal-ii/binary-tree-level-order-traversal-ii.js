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
var levelOrderBottom = function(root) {
    if(!root) return []

    let q = [root], res = []

    while(q.length){
        let level = []
        for(let i = q.length; i> 0; i--){
            let node = q.shift()
            level.push(node.val)
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
        res.push(level)
    }

    let l = 0, r = res.length-1

    while(l < r){
        [res[l], res[r]] = [res[r], res[l]]
        l++
        r--
    }
    return res
};