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

    // write tortoise hare algo to find the middle
    function findMiddle(head){
        let slow = head
        let fast = head.next
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }

    function merge(list1,list2){
        let dummy = new ListNode(-1000000)
        let temp = dummy

        while(list1 != null && list2 != null){
            if(list1.val <= list2.val){
                temp.next = list1
                temp = list1
                list1 = list1.next
            }
            else{
                temp.next = list2
                temp = list2
                list2 = list2.next
            }
        }
        if(list1) temp.next = list1
        else temp.next = list2

        return dummy.next
    }

    if(head == null || head.next == null) return head

    let middle = findMiddle(head)
    
    let right = middle.next
    middle.next = null
    let left = head

    let leftHead = sortList(left)
    let rightHead = sortList(right)

    return merge(leftHead, rightHead)
};