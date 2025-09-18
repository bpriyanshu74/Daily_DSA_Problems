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
var rotateRight = function(head, k) {
    if( !head) return head

    let len = 0, temp = head
    while(temp){
        len++
        temp = temp.next
    }

    k = k % len
    if(k == 0) return head

    temp = head

    for(let i=1; i<len-k; i++){
        temp = temp.next
    }
    let new_head = temp.next
    temp.next = null

    let temp1 = new_head
    while(temp1.next){
        temp1 = temp1.next
    }
    temp1.next = head

    return new_head

    
    
};