/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let str = []

    function dfs(node){
        if(!node) return
        str.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)

    return str.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data) return null

    let preorder = data.split(',').map(Number)

    let index = 0

    function construct(bound){
        if(index == preorder.length || preorder[index] > bound) return null

        let root = new TreeNode(preorder[index++])

        root.left = construct(root.val)
        root.right = construct(bound)

        return root
    }

    return construct(Infinity)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */