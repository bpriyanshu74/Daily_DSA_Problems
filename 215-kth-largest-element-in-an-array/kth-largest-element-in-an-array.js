/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    // defining the maxheap class

    class Maxheap{
        constructor(){
            this.maxheap = []
        }

        insert(val){
            this.maxheap.push(val)
            this.heapifyUp()
        }

        extractMax(){
            if(this.maxheap.length == 0) return null
            if(this.maxheap.length == 1) return this.maxheap.pop()

            let max = this.maxheap[0]
            this.maxheap[0] = this.maxheap.pop()
            this.heapifyDown()
            return max
        }
        getMax(){
            return this.maxheap[0]
        }
        swap(i,j){
            [this.maxheap[i], this.maxheap[j]] = [this.maxheap[j], this.maxheap[i]]
        }
        heapifyUp(){
            let index = this.maxheap.length-1

            while(index > 0){
                let parent = Math.floor((index-1)/2)
                if(this.maxheap[index] > this.maxheap[parent]){
                    this.swap(index, parent)
                    index = parent
                }
                else break
            }
        }

        heapifyDown(){
            let length = this.maxheap.length, index = 0

            while(true){
                let left = (2*index) + 1, right = (2*index) + 2, largest = index
                if(left < length && this.maxheap[left] > this.maxheap[largest]){
                    largest = left
                }

                if(right < this.maxheap.length && this.maxheap[right] > this.maxheap[largest]){
                    largest = right
                }

                if(largest != index){
                    this.swap(largest, index)
                    index = largest
                }else{
                    break
                }
            }
        }
        
    }
    
    // the main function
    let maxheap = new Maxheap()

    for(let num of nums){
        maxheap.insert(num)
    }

    while(k > 1){
        maxheap.extractMax()
        k--
    }

    return maxheap.getMax()
};