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
    let nums = []

    let temp = head
    while(temp){
        nums.push(temp.val)
        temp = temp.next
    }

    function dfs(l,r){
        if(l > r) return null

        let mid = l + Math.floor((r-l)/2)

        let root = new TreeNode(nums[mid])

        root.left = dfs(l, mid-1)
        root.right = dfs(mid+1, r)

        return root
    }

    if(nums.length == 0) return null
    return dfs(0, nums.length-1)
};