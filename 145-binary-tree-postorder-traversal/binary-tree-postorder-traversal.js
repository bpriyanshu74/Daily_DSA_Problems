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
    // iterative postorder 

    // reverse the preorder trick, 

    // preorder = root-l-r, so push left first then right making it to root - r - l then reverse the result
    // postorder = l-r-root

    if(!root) return []

    let stack = [root], ans = []

    while(stack.length){
        let node = stack.pop()

        ans.push(node.val)

        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
    }

    function reverse(arr){
        let l = 0, r = arr.length-1
        while(l < r){
            [arr[l], arr[r]] = [arr[r], arr[l]]
            l++
            r--
        }
    }
    reverse(ans)

    return ans

};