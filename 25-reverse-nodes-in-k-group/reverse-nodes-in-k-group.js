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
    if(!head || !head.next) return head
    let temp = head
    while(temp){
        let i = 0, temp1 = temp, stack = []
        while(i < k && temp1){
            stack.push(temp1.val)
            i++
            temp1 = temp1.next
        }
        if(stack.length != k) return head
        while(stack.length > 0){
            temp.val = stack.pop()
            temp = temp.next
        }
    }
    return head
    
};