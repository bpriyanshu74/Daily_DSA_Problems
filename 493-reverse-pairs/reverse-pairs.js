/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    return mergesort(nums, 0, nums.length)

    function mergesort(arr,l,r){
        if(r-l <= 1) return 0

        let count = 0

        let mid = l + Math.floor((r-l)/2)

        count += mergesort(arr, l ,mid)
        count += mergesort(arr, mid, r)
        count += countPairs(arr, l , mid, r)

        merge(arr, l , mid, r)

        return count
    }

    function countPairs(arr, l, mid, r){
        let j=mid, count = 0

        for(let i=l; i<mid; i++){
            while(j < r && arr[i] > 2*arr[j]){
                j++
            }

            count += j - mid
        }

        return count
    }

    function merge(arr, l, mid, r){
        let i=l, j = mid, temp = []

        while( i< mid && j < r){
            if(arr[i] <= arr[j]){
                temp.push(arr[i++])
            }else{
                temp.push(arr[j++])
            }
        }

        while( i < mid){
            temp.push(arr[i++])
        }
        while(j < r){
            temp.push(arr[j++])
        }

        for(let k=0; k<temp.length; k++){
            arr[l + k] = temp[k]
        }
    }
};