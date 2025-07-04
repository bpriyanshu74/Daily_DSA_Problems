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
    if(list1 == null) return list2
    if(list2 == null) return list1

    // let dummy = new ListNode(-1)
    // let cur = dummy

    // while(list1 && list2){
    //     if(list1.val <= list2.val){
    //         cur.next = list1
    //         list1 = list1.next
    //     }
    //     else{
    //         cur.next = list2
    //         list2 = list2.next
    //     }
    //     cur = cur.next
    // }

    // if(list1) cur.next = list1
    // if(list2) cur.next = list2

    // return dummy.next

    // lets try inplace
    let res
    
    if(list1.val <= list2.val){
        cur = list1
        list1 = list1.next
        res = cur
    }
    else{
        cur = list2
        list2 = list2.next
        res = cur
    }



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

    return res


    
};