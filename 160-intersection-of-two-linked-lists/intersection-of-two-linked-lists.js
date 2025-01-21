/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let len1 = 0, len2 = 0
    let temp1 = headA, temp2 = headB

    while(temp1){
        len1++
        temp1 = temp1.next
    }
    while(temp2){
        len2++
        temp2 = temp2.next
    }
    console.log(len1)
    console.log(len2)
    if(len1 > len2){
        let diff = len1-len2
        while(diff > 0){
            headA = headA.next
            diff--
        }
    }else{
        let diff = len2 - len1
        while(diff > 0){
            headB = headB.next
            diff--
        }
    }
    while(headA && headB){
        if(headA == headB){
            return headA
        }
        headA = headA.next
        headB = headB.next
    }
};