/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // hashmap setup
    let hashmap = new Map()

    for(let num of nums){
        hashmap.set(num, (hashmap.get(num)||0)+1)
    }

    // heap setup

    let heap  = [], size = 0 

    for(let [key,value] of hashmap.entries()){
        insert([key,value])
    }


    function insert([num,freq]){
        heap.push([num,freq])
        size += 1
        heapifyUp()
    }
    function extractMax(){
        [heap[0], heap[size-1]] = [heap[size-1], heap[0]]
        let maxval = heap.pop()

        size -= 1
        heapifyDown()

        return maxval[0]
    }

    function heapifyDown(){
        let index = 0
        while(true){
            let largest = index, left = 2*index+1, right = 2*index+2
            if(left < size && heap[left][1] > heap[largest][1]){
                largest = left
            }
            if(right < size && heap[right][1] > heap[largest][1]){
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

    function heapifyUp(){
        let index = size - 1
        while(index > 0){
            let parentindex = Math.floor((index-1)/2)
            if(heap[index][1] > heap[parentindex][1]){
                       [heap[index], heap[parentindex]] = [heap[parentindex], heap[index]]
                       index = parentindex
            }
            else{
                break
            }
        }
    }

    
    let res = []

    while(k > 0){
        res.push(extractMax())
        k--
    }

    return res
    
};