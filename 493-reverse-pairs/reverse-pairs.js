/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {

    function merge(arr,low,mid,high){
        let temparr = []
        let left = low, right = mid+1

        while(left <= mid && right <= high){
            if(arr[left] <= arr[right]){
                temparr.push(arr[left])
                left++
            }
            else{
                temparr.push(arr[right])
                right++
            }
        }

        while(left<= mid){
            temparr.push(arr[left])
            left++
        }

        while(right <= high){
            temparr.push(arr[right])
            right++
        }

        for(let i=low; i<= high; i++){
            arr[i] = temparr[i-low]
        }
    }
    function countPairs(arr,low,mid,high){
        let count = 0
        let right = mid+1

        for(let i=low; i<= mid; i++){
            while(right <= high && arr[i] > 2*arr[right]){
                right++
            }
            count += right - (mid+1)
        }
        return count
    }


    function mergesort(arr,low,high){
        let count = 0
        if(low >= high) return count

        let mid = Math.floor((low+high)/2)

        count += mergesort(arr,low,mid)
        count += mergesort(arr,mid+1,high)
        count += countPairs(arr,low,mid, high)

        merge(arr,low,mid,high)

        return count
    }
    return mergesort(nums,0,nums.length-1)
};