/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    // finding the mid

    let slow = head, fast = head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    // seperating the right part of the list
    let prev = null
    let cur = slow.next

    slow.next = null

    while(cur){
        let nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    }

    let first = head, second = prev

    while(second){
        let temp1 = first.next
        let temp2 = second.next

        first.next = second
        second.next = temp1

        first = temp1
        second = temp2
    }

    
};