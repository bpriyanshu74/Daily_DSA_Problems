/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {

    if(!head) return null
    let temp = head

    // copying and inserting the node right after the org node

    while(temp){
        let copy_node = new ListNode(temp.val)
        copy_node.next = temp.next
        temp.next = copy_node
        temp = temp.next.next || null
    }

    // assigning the random pointers

    temp = head
    while(temp){
        let copy = temp.next
        copy.random = temp.random ? temp.random.next : null
        temp = temp.next.next || null
    }

    // seperating the copy and org lists

    let dummy = new ListNode(-1)
    res = dummy
    temp = head
    while(temp){
        res.next = temp.next
        temp.next = temp.next.next

        temp = temp.next
        res = res.next
    }

    return dummy.next
};