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
    let arr = []

    let temp = head

    while(temp){
        arr.push(temp.val)
        temp = temp.next
    }

    // reversing
    let cur = head, prev = null
    while(cur){
        let nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    }
    let i=0
    while(prev){
        if(prev.val != arr[i]) return false
        i++
        prev = prev.next
    }
    return true
};