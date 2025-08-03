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
    // two pass method using hashmap
    if(!head) return null

    let hashmap = new Map(), temp = head

    while(temp){
        let newnode = new ListNode(temp.val)
        hashmap.set(temp, newnode)
        temp = temp.next
    }

    temp = head
    while(temp){
        let copynode = hashmap.get(temp)
        copynode.next = temp.next ? hashmap.get(temp.next) : null
        copynode.random = temp.random ? hashmap.get(temp.random) : null
        temp = temp.next
    }

    return hashmap.get(head)
    
};