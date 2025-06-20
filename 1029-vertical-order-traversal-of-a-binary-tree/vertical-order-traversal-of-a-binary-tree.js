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
var verticalTraversal = function(root) {
    // queue element = [y, [x, node]]
    if(root == null) return []

    let q = [[0, 0, root]], map = new Map(), ans = [], minX = 0, maxX = 0

    while(q.length){
        let size = q.length
        for(let i=0; i<size; i++){
            [x, y, node] = q.shift()
            if(!map.has(x)) map.set(x, [])

            map.get(x).push([y, node.val])

            minX = Math.min(minX, x)
            maxX = Math.max(maxX, x)

            if(node.left){
                q.push([x-1, y+1, node.left])
            }
            if(node.right){
                q.push([x+1, y+1, node.right])
            }
        }
    }

    for(let x = minX; x <= maxX; x++){
        let level = map.get(x)

        level.sort((a,b) => {
            if(a[0] != b[0]) return a[0] - b[0]

            return a[1] - b[1]
        })

        ans.push(level.map(([_, val]) => val))

    }

    return ans
    
};