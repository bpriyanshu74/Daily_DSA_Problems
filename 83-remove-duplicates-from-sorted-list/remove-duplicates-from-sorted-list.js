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
var deleteDuplicates = function(head) {

    let temp = head
    while( temp && temp.next){
        while(temp.next && temp.val === temp.next.val ){
            temp.next = temp.next.next
        }
    
            temp = temp.next
        
    }

    return head
    
};