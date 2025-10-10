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
        insert(num){
            this.heap.push(num)
            this.percolate_up()
        }
        extract(){
            let max = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.percolate_down()
            return max
        }
        swap(a,b){
            [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
        }

        percolate_up(){
            let index = this.heap.length-1
            while(index > 0){
                let parent = Math.floor((index-1)/2)
                if(this.heap[parent] < this.heap[index]){
                    this.swap(parent, index)
                    index = parent
                }else{
                    break
                }
            }
        }

        percolate_down(){
            let index = 0, largest = index, n = this.heap.length

            while(true){
                let left = 2*index+1
                let right = 2*index+2

                if(left < n && this.heap[left] > this.heap[largest]){
                    largest = left
                }
                if(right < n && this.heap[right] > this.heap[largest]){
                    largest = right
                }

                if(largest != index){
                    this.swap(largest, index)
                    index = largest
                }else break
            }
        }
    }

    let maxheap = new Maxheap()
    for(let num of nums){
        maxheap.insert(num)
    }
    let res = 0
    while(k > 0){
        res = maxheap.extract()
        k--
    }
    return res
    
};