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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val)

    let temp = root
    let node = new TreeNode(val)
    while(true){
        if(val > temp.val){
            if(temp.right) temp = temp.right
            else{
                temp.right = node
                break
            }
        }
        else{
            if(temp.left) temp = temp.left
            else{
                temp.left = node
                break
            }
        }
    }

    return root

    
};