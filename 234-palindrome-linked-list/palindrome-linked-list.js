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
    if(!head || !head.next) return true
    let slow = head, fast = head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    
    let cur = slow, prev = null

    while(cur){
        let nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    }

    let left = head, right = prev

    while(right){
        if(left.val != right.val) return false
        left = left.next
        right = right.next
    }
    return true
    
};