class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        def binarySearch(arr,x,l,r):    
            while(l<=r):
                mid = (l+r) // 2
                if(arr[mid] == x):
                    return mid
                elif(arr[mid] < x):
                    l = mid + 1
                else:
                    r = mid - 1
            return l
        n = len(nums)
        result = binarySearch(nums,target,0,n-1)
        return result
        
        