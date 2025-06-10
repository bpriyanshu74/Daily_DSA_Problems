/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let temp = head, count = 1

    let odd = new ListNode(-1)
    let even = new ListNode(-1)

    let oddhead = odd, evenhead = even

    while(temp){
        if(count % 2 == 1){
            odd.next = temp
            odd = odd.next
        }
        else{
            even.next = temp
            even = even.next
        }
        count++
        temp = temp.next
    }
    even.next = null
    odd.next = evenhead.next

    return oddhead.next

    
};