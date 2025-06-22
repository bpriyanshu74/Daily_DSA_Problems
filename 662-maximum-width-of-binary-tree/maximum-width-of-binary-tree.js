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
var widthOfBinaryTree = function(root) {
    if(root == null) return 0
    let q = [[root,0]], maxwidth = 0

    while(q.length){
        let size = q.length, nmin = q[0][1], first, last

        for(let i=0; i<size; i++){
            let [node,index] = q.shift()

            let cur_index = index - nmin

            if(i==0) first = cur_index
            if(i == size-1) last = cur_index

            if(node.left) q.push([node.left, 2*cur_index+1])
            if(node.right) q.push([node.right, 2*cur_index+2])
        }

        maxwidth = Math.max(maxwidth, last-first+1)

    }
    return maxwidth
    
};