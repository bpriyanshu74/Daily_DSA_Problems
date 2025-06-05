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

    let tempa = headA, tempb = headB

    while(tempa){
        len1++
        tempa = tempa.next
    }
    while(tempb){
        len2++
        tempb = tempb.next
    }

    let temp1 = headA, temp2 = headB, diff = Math.abs(len1-len2)
    if(len1 > len2){
        while(diff > 0){
            temp1 = temp1.next
            diff--
        }
    }
    else{
        while(diff > 0){
            temp2 = temp2.next
            diff--
        }
    }


    while(temp1 && temp2){
        if(temp1 == temp2) return temp1
        temp1 = temp1.next
        temp2 = temp2.next
    }

    return null
    
};