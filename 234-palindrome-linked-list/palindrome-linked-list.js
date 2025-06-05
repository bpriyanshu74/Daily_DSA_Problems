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

    let slow = head, fast = head, temp = head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    // reversing the second half
    let cur = slow, prev = null
    while(cur){
        let nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    }

    while(temp && prev){
        if(temp.val != prev.val) return false
        temp = temp.next
        prev = prev.next
    }
    return true
    
};