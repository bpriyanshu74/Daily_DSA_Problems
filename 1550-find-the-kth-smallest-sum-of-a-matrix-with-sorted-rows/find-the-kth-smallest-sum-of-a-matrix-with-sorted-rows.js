/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(mat, k) {
    // Simple MinHeap class
class MinHeap {
    constructor() {
        this.data = [];
    }

    push(val) {
        this.data.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.data.length === 1) return this.data.pop();

        const top = this.data[0];
        this.data[0] = this.data.pop();
        this._heapifyDown();
        return top;
    }

    isEmpty() {
        return this.data.length === 0;
    }

    _heapifyUp() {
        let i = this.data.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.data[i][0] < this.data[p][0]) {
                [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
                i = p;
            } else break;
        }
    }

    _heapifyDown() {
        let i = 0;
        let length = this.data.length;

        while (true) {
            let smallest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            if (left < length && this.data[left][0] < this.data[smallest][0]) {
                smallest = left;
            }
            if (right < length && this.data[right][0] < this.data[smallest][0]) {
                smallest = right;
            }
            if (smallest !== i) {
                [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
                i = smallest;
            } else {
                break;
            }
        }
    }
}

// implementing the main function

    let m = mat.length, n = mat[0].length

    let prev = mat[0]

    for(let i=1; i<m; i++){
        prev = mergeKSmallest(prev, mat[i], k)
    }

    return prev[k-1]

    function mergeKSmallest(a,b,k){
        let minheap = new MinHeap()
        let res = [], visited = new Set()

        minheap.push([a[0]+b[0],0,0])

        visited.add(`0,0`)

        while(res.length < k && !minheap.isEmpty()){
            let [sum, i,j] = minheap.pop()
            res.push(sum)

            if(i+1 < a.length && !visited.has(`${i+1},${j}`)){
                minheap.push([a[i + 1] + b[j], i + 1, j]);
                visited.add(`${i + 1},${j}`);
            }
            if(j+1 < b.length && !visited.has(`${i},${j+1}`)){
                minheap.push([a[i] + b[j+1], i, j+1]);
                visited.add(`${i},${j+1}`)
            }
        }

        return res
    }





    
};