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
var minCameraCover = function(root) {
    // 0: not covered
    // 1: camera placed
    // 2: covered

    function dfs(node){
        if(!node){
            return 2
        }
        let left = dfs(node.left)
        let right = dfs(node.right)

        if(left == 0 || right == 0){
            cameras++
            return 1
        }
        if(left == 1 || right == 1){
            return 2
        }
        return 0
    }
    
    let cameras = 0
    if(dfs(root) == 0) cameras++
    return cameras
};