class ListNode {
        constructor(data){
            this.val = data
            this.next = null
        }
    }
var MyLinkedList = function() {
        this.head = null
        this.length = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {

    if(index < 0 || index >= this.length) return -1

    let cur = this.head

    for(let i=0; i<index; i++){
        cur = cur.next
    }

    return cur.val
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {

    let newnode = new ListNode(val)
    newnode.next = this.head
    this.head = newnode
    this.length++
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newnode = new ListNode(val)
    let cur = this.head

    if(this.head == null){
        this.head = newnode
    }
    else{
        while(cur.next){
            cur = cur.next
        }
        cur.next = newnode
    }
    this.length++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0 || index > this.length) return 

    let newnode = new ListNode(val)
    if(index == 0){
        this.addAtHead(val)
        return
    }

    let cur = this.head
    for(let i=0;i <index-1; i++){
        cur = cur.next
    }

    newnode.next = cur.next
    cur.next = newnode

    this.length++
    
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.length) return
    if(index == 0){
        this.head = this.head.next
        this.length--
        return
    }

    let cur = this.head

    for(let i=0; i<index-1; i++){
        cur = cur.next
    }

    cur.next = cur.next.next
    this.length--
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */