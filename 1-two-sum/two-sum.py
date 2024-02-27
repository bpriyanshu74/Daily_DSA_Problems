import collections
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        mydict = collections.defaultdict(int)
        for i in range(len(nums)):
            diff = target - nums[i]
            if(diff in mydict):
                return [i,mydict[diff]]
            else:
                mydict[nums[i]] = i
            
        