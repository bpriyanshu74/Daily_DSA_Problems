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
    function helper(ll){
        let length = 0
        while(ll != null){
            length++
            ll = ll.next
        }
        return length
    }
    let lenA = helper(headA)
    let lenB = helper(headB)

    while(lenA > lenB){
        headA = headA.next
        lenA--
    }
    while(lenB > lenA){
        headB = headB.next
        lenB--
    }
    while(headA != null){
        if(headA == headB){
            return headA
        }
        headA = headA.next
        headB = headB.next
    }    
    return null
};