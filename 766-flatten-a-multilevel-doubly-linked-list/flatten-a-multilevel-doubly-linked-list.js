/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
    if(!head) return head
    dfs(head)
    return head

    function dfs(node){
        // defining the start and last of the node
        let cur = node, last = null

        while(cur){
            // storing the next pointer
            let next = cur.next

            // checking if there is child
            if(cur.child){
                // treating child as a new node making start and end of this
                let childhead = cur.child
                let childtail = dfs(childhead)

                // connecting the child portion to cur
                cur.next = childhead
                childhead.prev = cur

                //checking if there is next connect that as well
                if(next){
                    childtail.next = next
                    next.prev = childtail
                }

                // removing child pointer
                cur.child = null

                // moving the two pointer
                last = childtail
                cur = childtail
            }
            else{
                last = cur
                cur = cur.next
            }
        }
        return last
    }
    
};