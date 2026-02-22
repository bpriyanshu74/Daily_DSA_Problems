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
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {

    if(depth == 1){
        let new_root = new TreeNode(val, root, null)
        return new_root
    }

    function dfs(node, v, d){
        if(!node) return

        if(d == depth - 1){
            let org_left_subtree = node.left
            let org_right_subtree = node.right

            node.left = new TreeNode(v, org_left_subtree, null)
            node.right = new TreeNode(v, null, org_right_subtree)
            return
        }

        dfs(node.left, v, d+1)
        dfs(node.right, v, d+1)

    }

    dfs(root, val, 1)

    return root


    
};