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
    let dummy = new ListNode(-1), temp = dummy
    let temp1 = list1, temp2 = list2

    while(temp1 && temp2){
        if(temp1.val <= temp2.val){
            temp.next = temp1
            temp1 = temp1.next
        }
        else{
            temp.next = temp2
            temp2 = temp2.next
        }
        temp = temp.next
    }

    while(temp1){
        temp.next = temp1
        temp1 = temp1.next
        temp = temp.next
    }

    while(temp2){
        temp.next = temp2
        temp2 = temp2.next
        temp = temp.next
    }

    return dummy.next
    
};