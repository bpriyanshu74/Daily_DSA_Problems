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
    // edge cases
    if(list1 == null) return list2
    if(list2 == null) return list1

    let head, cur

    // setting the head
    if(list1.val <= list2.val){
        head = list1
        cur = list1
        list1 = list1.next
    }else{
        head = list2
        cur = list2
        list2 = list2.next
    }

    // iterating over the lists
    while(list1 && list2){
        if(list1.val <= list2.val){
            cur.next = list1
            list1 = list1.next
        }
        else{
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
    }

    if(list1) cur.next = list1
    if(list2) cur.next = list2

    return head
    
};