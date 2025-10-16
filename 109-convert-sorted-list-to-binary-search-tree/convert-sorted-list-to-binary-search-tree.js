/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(!head) return null

    let cur = head, count = 0

    while(cur){
        count++
        cur = cur.next
    }
    cur = head
    
    function buildTree(l, r){
        if(l > r) return null
        let mid = l + Math.floor((r-l)/2), node = new TreeNode()

        node.left = buildTree(l, mid-1)
        node.val = cur.val
        cur = cur.next
        node.right = buildTree(mid+1, r)

        return node
    }

    return buildTree(1, count)
    
};