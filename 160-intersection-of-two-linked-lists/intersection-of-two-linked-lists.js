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
    // we'll move both the lls together until one of them reaches its end

    let lla = headA, llb = headB, c1 = 0, c2 = 0

    while(lla){
        c1++
        lla = lla.next
    }

    while(llb){
        c2++
        llb = llb.next
    }

    if(c1 > c2){
        let diff = c1 - c2
        while(diff > 0){
            headA = headA.next
            diff--
        }
    }
    else if(c2 > c1){
        let diff = c2 - c1
        while(diff > 0){
            headB = headB.next
            diff--
        }
    }

    while(headA && headB){
        if(headA == headB) return headA
        headA = headA.next
        headB = headB.next
    }
    return null
    
};