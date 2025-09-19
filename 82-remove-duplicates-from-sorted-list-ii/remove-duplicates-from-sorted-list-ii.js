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
var deleteDuplicates = function(head) {
    let dummy = new ListNode(-1)
    dummy.next = head
    prev = dummy

    while(head){
        if(head.next && head.val == head.next.val){
            let val = head.val
            while(head && head.val == val){
                head = head.next
            }
            prev.next = head

        }
        else{
            prev = prev.next
            head = head.next
        }
    }
    return dummy.next
};