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
var postorderTraversal = function(root) {
    if(root == null) return []
    let op = [], st1 = [], st2 = []
    st1.push(root)
    while(st1.length != 0){
        let node = st1.pop()

        st2.push(node)

        if(node.left) st1.push(node.left)
        if(node.right) st1.push(node.right)

    }
    while(st2.length != 0){
        let node = st2.pop()
        op.push(node.val)
    }

    return op
};