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
var sumNumbers = function(root) {
    function convert_to_num(arr){
        if(arr.length == 0) return 0
        if(arr.length == 1) return arr[0]

        let sum = 0
        let pow = arr.length, i = 0

        while(pow > 0 && i < arr.length){
            sum += arr[i] * (10**(pow-1))
            pow--
            i++
        }
        return sum
    }

    function dfs(node, path){
        if(!node) return
        path.push(node.val)
        if(!node.left && !node.right){
            res += convert_to_num(path)
        }else{
            dfs(node.left, path) 
            dfs(node.right, path)
        }
        path.pop()
    }

    let res = 0
    dfs(root,[])
    return res
};