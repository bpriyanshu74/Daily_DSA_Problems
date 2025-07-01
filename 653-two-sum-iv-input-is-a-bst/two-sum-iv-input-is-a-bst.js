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
var BstIterator = function(root,reverse){
    this.stack = []
    this.reverse = reverse
    this.pushAll(root)
}

BstIterator.prototype.pushAll = function(node){
    while(node){
        this.stack.push(node)
        if(this.reverse){
            node = node.right
        }else{
            node = node.left
        }
    }
}

BstIterator.prototype.next = function(){
    let topnode = this.stack.pop()

    if(this.reverse){
        this.pushAll(topnode.left)
    }
    else{
        this.pushAll(topnode.right)
    }

    return topnode.val
}
var findTarget = function(root, k) {
    if(!root) return false
    let l = new BstIterator(root,false)
    let r = new BstIterator(root, true)

    let i = l.next()
    let j = r.next()

    while(i < j){
        if(i+j == k) return true
        else if(i+j < k) i = l.next()
        else j = r.next()
    }

    return false
    
};