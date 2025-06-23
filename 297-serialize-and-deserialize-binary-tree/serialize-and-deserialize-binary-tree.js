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
    if(root == null) return '#'
    let result = [], q = [root]

    while(q.length){
        let node = q.shift()

        if(node){
            result.push(String(node.val))
            q.push(node.left)
            q.push(node.right)
        }
        else{
            result.push('#')
        }
    }

    return result.join(',')
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data == "#") return null
    let values = data.split(',')

    let root = new TreeNode(parseInt(values[0]))
    let i=1, q = [root]

    while(q.length && i < values.length){
        let node = q.shift()

        if(values[i] != '#'){
            node.left = new TreeNode(parseInt(values[i]))
            q.push(node.left)
        }
        i++

        if( i < values.length && values[i] != "#"){
            node.right = new TreeNode(parseInt(values[i]))
            q.push(node.right)
        }
        i++
    }

    return root
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */