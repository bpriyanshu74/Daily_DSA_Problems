/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(-1)
    dummy.next = head

    let prev = dummy
    while(true){
        let node = prev;
        for(let i = 0; i < k && node; i++) {
            node = node.next;
        }
        if(!node) break;
        let i = 1
        while(i < k && head.next){
            let nxt = head.next
            head.next = nxt.next

            nxt.next = prev.next
            prev.next = nxt
            i++
        }
        prev = head
        head = head.next
    }

    return dummy.next
    
};