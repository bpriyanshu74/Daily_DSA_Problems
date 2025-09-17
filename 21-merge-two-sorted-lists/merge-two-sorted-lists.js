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
    let dummy = new ListNode(-1)

    let temp = dummy, l1 = list1, l2 = list2

    while(l1 && l2){
        if(l1.val <= l2.val){
            temp.next = new ListNode(l1.val)
            l1 = l1.next
        }
        else{
            temp.next = new ListNode(l2.val)
            l2 = l2.next
        }
        temp = temp.next
    }

    while(l1){
        temp.next = new ListNode(l1.val)
        l1 = l1.next
        temp = temp.next
    }

    while(l2){
        temp.next = new ListNode(l2.val)
        l2 = l2.next
        temp = temp.next
    }

    return dummy.next
    
};