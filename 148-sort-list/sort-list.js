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
var sortList = function(head) {
    let list = []

    let temp = head, temp1 = head

    while(temp){
        list.push(temp.val)
        temp = temp.next
    }

    list.sort((a,b) => a-b)

    let i=0

    while(temp1){
        temp1.val = list[i]
        i++
        temp1 = temp1.next
    }

    return head

    
};