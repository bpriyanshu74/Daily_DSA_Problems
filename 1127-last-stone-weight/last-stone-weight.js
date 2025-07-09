/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let heap = [], size = 0

    for(let i=0; i<stones.length; i++){
        insert(stones[i])
    }
    function insert(val){
        heap.push(val)
        size += 1
        heapifyUp()
    }
    function extract(){
        [heap[0], heap[size-1]] = [heap[size-1], heap[0]]
        size -= 1
        let maxval = heap.pop()
        heapifyDown()

        return maxval
    }

    function heapifyUp(){
        let index = size-1
        while(index > 0){
            let parentindex = Math.floor((index-1)/2)

            if(heap[index] > heap[parentindex]){
                [heap[index], heap[parentindex]] = [heap[parentindex], heap[index]]
                index = parentindex
            }
            else{
                break
            }
        }
    }

    function heapifyDown(){
        let index = 0
        while(true){
            let largest = index, left = 2*index+1, right = 2*index+2
            if(left < size && heap[left] > heap[largest]){
                largest = left
            }
            if(right < size && heap[right] > heap[largest]){
                largest = right
            }
            if(largest != index){
                [heap[largest], heap[index]] = [heap[index], heap[largest]]
                index = largest
            }
            else{
                break
            }
        }
    }

    while(size > 1){
        let first = extract()
        let second = extract()

        let newstone = first - second

        if(newstone > 0){
            insert(newstone)
        }
    }

    if(size > 0) return heap[0]
    return 0
    
};