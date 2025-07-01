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
 */
var BSTIterator = function(root) {
    this.stack = []
    this._leftmost(root)
};

BSTIterator.prototype._leftmost = function(node){
    while(node){
        this.stack.push(node)
        node = node.left
    }
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let topnode = this.stack.pop()

    if(topnode.right){
        this._leftmost(topnode.right)
    }

    return topnode.val

    
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */