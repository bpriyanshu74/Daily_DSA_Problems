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
var countNodes = function(root) {

    if(root == null) return 0

    let lh = findh(root,'l')
    let rh = findh(root, 'r')

    if(lh == rh) return (1<<lh)-1
    return 1 + countNodes(root.left) + countNodes(root.right)

    function findh(node, dir){
        if(dir == 'l'){
            let h = 0
            while(node){
                h++
                node = node.left
            }
            return h
        }
        if(dir == 'r'){
            let h = 0
            while(node){
                h++
                node = node.right
            }
            return h
        }
    }
};