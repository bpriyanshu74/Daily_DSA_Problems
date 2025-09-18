/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let left = head

    function dfs(right){
        if(right == null) return true
        if(!dfs(right.next)) return false
        if(left.val != right.val) return false

        left = left.next
        return true

    }
    return dfs(head)
    
};