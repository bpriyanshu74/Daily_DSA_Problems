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
    let temp = head
    // inserting the nodes in between
    while(temp){
        let copynode = new ListNode(temp.val)
        copynode.next = temp.next || null
        temp.next = copynode

        temp = temp.next.next || null
    }

    // assigning the random pointer values

    temp = head
    while(temp){
        let copynode = temp.next
        copynode.random = temp.random ? temp.random.next : null;

        temp = temp.next.next || null
    }

    // seperating the copy and original list
    temp = head
    let dummynode = new ListNode(-1), res = dummynode
    while(temp){
        res.next = temp.next
        temp.next = temp.next.next

        temp = temp.next
        res = res.next
    }

    return dummynode.next
    
};