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
var preorderTraversal = function(root) {
    //iteratively

    let stack = [], ans = []

    if(root == null) return ans

    stack.push(root)

    while(stack.length){
        let size = stack.length

        for(let i=0; i<size; i++){
            let node = stack.pop()
            ans.push(node.val)

            if(node.right) stack.push(node.right)
            if(node.left) stack.push(node.left)
        }
    }

    return ans
    
};