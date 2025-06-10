/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {

    function findMiddle(head){
        let slow = head, fast = head.next

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        return slow
    }

    function merge(a,b){
        let dummy = new ListNode(-100000)

        let temp = dummy

        while(a && b){
            if(a.val <= b.val){
                temp.next = a
               
                a = a.next
            }
            else{
                temp.next = b
            
                b = b.next
            }
            temp = temp.next
        }

        if(a){
            temp.next = a
        }
        if(b){
            temp.next = b
        }
        return dummy.next
    }

    if(!head || !head.next) return head

    let middle = findMiddle(head)

    let right = middle.next
    middle.next = null
    let left = head

    let lefthead = sortList(left)
    let righthead = sortList(right)

    return merge(lefthead,righthead)
    
};