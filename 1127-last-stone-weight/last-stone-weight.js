/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length == 0) return 0
    // min_heap

    let minheap = stones.sort((a,b) => a-b)
    let heapsize = minheap.length

    while(heapsize != 1){
        let one = heapsize-1
        let two = heapsize-2

        let newstone = minheap[one] - minheap[two]
        minheap[two] = newstone
        minheap.sort((a,b) => a-b)
        heapsize--
    }

    return minheap[0]
    
};