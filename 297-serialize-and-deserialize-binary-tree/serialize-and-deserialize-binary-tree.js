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
    function dfs(node){
        if(!node) return ['null']
        return [node.val, ...dfs(node.left), ...dfs(node.right)]
    }
    return dfs(root).join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let values = data.split(','), index = 0

    function build(){
        if(index >= values.length) return null
        let val = values[index++]
        if(val == 'null') return null

        let node = new TreeNode(Number(val))

        node.left = build()
        node.right = build()

        return node
    }

    return build()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */