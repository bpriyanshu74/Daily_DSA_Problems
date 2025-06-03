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
    let result = dummy

    while(list1 && list2){
        if(list1.val <= list2.val){
            dummy.next = list1
            list1 = list1.next
        }
        else{
            dummy.next = list2
            list2 = list2.next
        }
        dummy = dummy.next
    }

    if(list1 != null){
        dummy.next = list1
    }
    if(list2 != null){
        dummy.next = list2
    }

    return result.next
    
};