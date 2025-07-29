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
    // returning list1 as final output
    let dummy = new ListNode(-1), a = list1, b = list2, cur

    if(a.val <= b.val){
        dummy.next = a
        cur = a
        a = a.next
    }
    else{
        dummy.next = b
        cur = b
        b = b.next
    }

    while(a && b){
        if(a.val <= b.val){
            cur.next = a
            a = a.next
        }
        else{
            cur.next = b
            b = b.next
        }
        cur = cur.next
    }

    if(a){
        cur.next = a
    }
    if(b){
        cur.next = b
    }

    return dummy.next


    
};