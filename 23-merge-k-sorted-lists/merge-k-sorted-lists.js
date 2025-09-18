/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length == 0) return null
    if(lists.length == 1) return lists[0] 

    function merge(a,b){
        let dummy = new ListNode(-1), temp = dummy
        while(a && b){
            if(a.val <= b.val){
                temp.next = new ListNode(a.val) 
                a = a.next
            }
            else{
                temp.next = new ListNode(b.val)
                b = b.next
            }
            temp = temp.next
        }
        while(a){
            temp.next = a
            a = a.next
            temp = temp.next
        }
        while(b){
            temp.next = b
            b = b.next
            temp = temp.next
        }
        return dummy.next
    }

    while(lists.length > 1){
        let newll = merge(lists.pop(), lists.pop())
        lists.push(newll)
    }

    return lists[0]
    
};