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
    if(!head || !head.next) return head


    let dummy = new ListNode(-1, head)
    let temp = head, cur = head.next

    while(cur){
        while(cur && cur.val == temp.val){
            cur = cur.next
        }
        temp.next = cur
        temp = temp.next
    }


    return dummy.next
    
};