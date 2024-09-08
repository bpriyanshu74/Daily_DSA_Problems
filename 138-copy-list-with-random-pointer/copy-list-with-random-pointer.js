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
    let map = new Map()

    // creating nodes
    let temp = head
    while(temp){
        map.set(temp, new ListNode(temp.val))
        temp = temp.next
    }
    // setting the next values and random values
    temp = head
    while(temp){
        let copyNode = map.get(temp)
        copyNode.next = map.get(temp.next) || null
        copyNode.random = map.get(temp.random) || null

        temp = temp.next
    }

    // returning the copy head
    return map.get(head) || null

};