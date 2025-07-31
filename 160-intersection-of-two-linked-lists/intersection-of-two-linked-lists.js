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
    if(!headA || !headB) return null
    let s1 = headA, s2 = headB, len1 = 1, len2 = 1
    while(s1){
        s1 = s1.next
        len1++

    }
    while(s2){
        s2 = s2.next
        len2++
    }
    if(len1 > len2){
        let steps = len1 - len2
        while(steps > 0){
            headA = headA.next
            steps--
        }
    }
    if(len2 > len1){
        let steps = len2 - len1
        while(steps > 0){
            headB = headB.next
            steps--
        }
    }

    while(headA && headB){
        if(headA == headB) return headA
        headA = headA.next
        headB = headB.next
    }

    return null

};