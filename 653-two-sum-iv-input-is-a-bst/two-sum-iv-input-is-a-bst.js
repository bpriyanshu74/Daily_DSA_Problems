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
 * @param {number} k
 * @return {boolean}
 */

var findTarget = function(root, k) {
    let arr = []
    function dfs(node){
        if(!node) return
        dfs(node.left)
        arr.push(node.val)
        dfs(node.right)
    }
    dfs(root)

    let l = 0, r = arr.length-1
    while(l < r){
        if(arr[l] + arr[r] == k){
            return true
        } 
        else if(arr[l] + arr[r] < k){
            l++
        }
        else{
            r--
        }
    }
    return false
    
};