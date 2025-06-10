/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(l1 == null) return l2
    if(l2 == null) return l1
    if(!l1 && !l2) return null

    let dummy = new ListNode(-1),cur = dummy, carry = 0

    while(l1 && l2){
        let sum = l1.val + l2.val + carry
        let newdigit = (sum)% 10
        carry = Math.floor(sum / 10)

        let newnode = new ListNode(newdigit)

        cur.next = newnode
        cur = cur.next
        l1 = l1.next
        l2 = l2.next
    }
    while(l1){
        let sum = l1.val + carry
        let newdigit = (sum)% 10
        carry = Math.floor(sum / 10)
        let newnode = new ListNode(newdigit)
        cur.next = newnode
        cur = cur.next
        l1 = l1.next
    }
    while(l2){
        let sum = l2.val + carry
        let newdigit = (sum)% 10
        carry = Math.floor(sum / 10)
        let newnode = new ListNode(newdigit)
        cur.next = newnode
        cur = cur.next
        l2 = l2.next
    }

    if(carry != 0){
        let newnode = new ListNode(carry)
        cur.next = newnode
        cur = cur.next
    }


    return dummy.next
    
};