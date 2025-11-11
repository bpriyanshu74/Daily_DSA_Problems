/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    class Maxheap{
        constructor(){
            this.heap = []
        }

        insert(val){
            this.heap.push(val)
            this.heapifyUp()
        }

        extractMax(){
            if(this.heap.length == 0) return null
            if(this.heap.length == 1) return this.heap.pop()
            let max = this.heap[0]

            this.heap[0] = this.heap.pop()

            this.heapifyDown()

            return max
        }
        getMax(){
            return this.heap[0]
        }

        heapifyUp(){
            let index = this.heap.length-1

            while(index > 0){
                let parent = Math.floor((index-1)/2)

                if(this.heap[index] > this.heap[parent]){
                    this.swap(index, parent)
                    index = parent
                }else{
                    break
                }
            }
        }

        heapifyDown(){
            let index = 0, n = this.heap.length

            while(true){
                let left = (2*index)+1, right = (2*index)+2, largest = index

                if(left < n && this.heap[left] > this.heap[largest]){
                    largest = left
                }
                if(right < n && this.heap[right] > this.heap[largest]){
                    largest = right
                }

                if(index != largest){
                    this.swap(index, largest)
                    index = largest
                }else{
                    break
                }
            }
        }
        swap(i,j){
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
        }
    }
    let maxheap = new Maxheap()
    for(let num of nums){
        maxheap.insert(num)
    }

    for(let i=0; i<k-1; i++){
        maxheap.extractMax()
    }

    return maxheap.getMax()


};