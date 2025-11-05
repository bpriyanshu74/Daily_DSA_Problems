/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2
    if(!list2) return list1

    let dummy = new ListNode(-1),cur = dummy, temp1 = list1, temp2 = list2

    while(temp1 && temp2){
        if(temp1.val <= temp2.val){
            cur.next = temp1
            temp1 = temp1.next
        }else{
            cur.next = temp2
            temp2 = temp2.next
        }
        cur = cur.next
    }

    if(temp1){
        cur.next = temp1
    }
    if(temp2){
        cur.next = temp2
    }

    return dummy.next
};