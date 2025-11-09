/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    // heap creation
    class MinHeap{
        constructor(){
            this.minheap = []
        }

        insert(val){
            this.minheap.push(val)
            this.heapifyUp()
        }
        size(){
            return this.minheap.length
        }

        extractMin(){
            if(this.minheap.length == 0) return null
            if(this.minheap.length == 1) return this.minheap.pop()

            let min = this.minheap[0]
            this.minheap[0] = this.minheap.pop()
            this.heapifyDown()
            return min
        }
        getMin(){
            return this.minheap[0]
        }
        swap(i,j){
            [this.minheap[i], this.minheap[j]] = [this.minheap[j], this.minheap[i]]
        }
        heapifyUp(){
            let index = this.minheap.length-1

            while(index > 0){
                let parent = Math.floor((index-1)/2)
                if(this.minheap[index] < this.minheap[parent]){
                    this.swap(index, parent)
                    index = parent
                }
                else break
            }
        }

        heapifyDown(){
            let length = this.minheap.length, index = 0

            while(true){
                let left = (2*index) + 1, right = (2*index) + 2, smallest = index
                if(left < length && this.minheap[left] < this.minheap[smallest]){
                    smallest = left
                }

                if(right < this.minheap.length && this.minheap[right] < this.minheap[smallest]){
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
    //initialize

    this.k = k
    this.minheap = new MinHeap()

    for(let num of nums){
        this.minheap.insert(num)
        if(this.minheap.size() > this.k){
            this.minheap.extractMin()
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    // adding and returning the kth largest value
    this.minheap.insert(val)
    if(this.minheap.size() > this.k){
        this.minheap.extractMin()
    }

    return this.minheap.getMin()
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */