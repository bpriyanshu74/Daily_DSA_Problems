class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        nums.sort()
        n = len(nums)
        req = n - k
        return nums[req]
        