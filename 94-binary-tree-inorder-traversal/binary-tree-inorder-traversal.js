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
var inorderTraversal = function(root) {
    let st = [], inorder = [], node = new TreeNode()

    node = root


    while(true){
        if(node != null){
            st.push(node)
            node = node.left
        }
        else{
            if(!st.length) break
            node = st[st.length-1]
            st.pop()
            inorder.push(node.val)
            node = node.right
        }
    }
    return inorder
};