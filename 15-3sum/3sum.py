class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        triplets = []
        for i in range(len(nums) - 2):
            if(i > 0 and nums[i] == nums[i-1]):
                continue
            j = i+1
            k = len(nums) - 1

            while(j < k):
                threesum = nums[i] + nums[j] + nums[k]
                if( threesum == 0):
                    triplets.append([nums[i], nums[j], nums[k]])
                    while(j < k and nums[j] == nums[j+1]):
                        j += 1
                    while(k > j and nums[k] == nums[k-1]):
                        k -= 1
                    j += 1
                    k -= 1
                elif(threesum > 0):
                    k -= 1
                else:
                    j += 1
        return triplets        