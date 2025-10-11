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
    class Minheap{
        constructor(){
            this.heap = []
            this.size = 0
        }
        insert(node){
            this.heap.push(node)
            this.percolate_up()
            this.size++
        }
        extract_min(){
            if(this.heap.length === 0) return null;
            let min = this.heap[0];
            let last = this.heap.pop();
            this.size--;
            if(this.heap.length > 0){
                this.heap[0] = last;
                this.percolate_down();
            }
            return min;
        }
        swap(a,b){
            [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
        }
        percolate_up(){
            let index = this.heap.length-1
            while(index > 0){
                let parent = Math.floor((index-1)/2)
                if(this.heap[index].val < this.heap[parent].val){
                    this.swap(parent, index)
                    index = parent
                }else{
                    break
                }
            }
        }
        percolate_down(){
            let index = 0, smallest = index, n = this.heap.length
            while(true){
                let left = 2 * index + 1
                let right = 2 * index + 2
                if(left < n && this.heap[left].val < this.heap[smallest].val){
                    smallest = left
                }
                if(right < n && this.heap[right].val < this.heap[smallest].val){
                    smallest = right
                }
                if(smallest != index){
                    this.swap(smallest, index)
                    index = smallest
                }else{
                    break
                }
            }
        }
    }
    let dummy = new ListNode(-1), temp = dummy
    let heap = new Minheap()

    for(let list of lists){
        if(list) heap.insert(list)
    }
    // now we have min heap of linked list heads

    while(heap.size){
        let node = heap.extract_min()
        // setting up in the new ll
        temp.next = node
        temp = temp.next
        // inserting the new value of pooped node
        node = node.next || null
        if(node) heap.insert(node)
    }
    return dummy.next
};