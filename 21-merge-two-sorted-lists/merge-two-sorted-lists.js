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

    let t1 = list1, t2 = list2, cur
    let dummy = new ListNode(-1)

    if(t1.val <= t2.val){
        dummy.next = t1
        cur = t1
        t1 = t1.next
    }else{
        dummy.next = t2
        cur = t2
        t2 = t2.next
    }

    while(t1 && t2){
        if(t1.val <= t2.val){
            cur.next = t1
            t1 = t1.next
        }else{
            cur.next = t2
            t2 = t2.next
        }
        cur = cur.next
    }

    if(t1){
        cur.next = t1
    }
    if(t2){
        cur.next = t2
    }

    return dummy.next
};