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
    let arr = []
    let temp = head

    while(temp){
        arr.push(temp.val)
        temp = temp.next
    }
    arr.sort((a,b) => a-b)

    temp = head

    for(let i=0; i<arr.length; i++){
        temp.val = arr[i]
        temp = temp.next
    }

    return head
    
};