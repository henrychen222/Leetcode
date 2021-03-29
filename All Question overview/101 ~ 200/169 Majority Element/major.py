# usr/bin/python3
# import statistics
class Solution(object):
    def majorityElement(self, nums):
        # Method 1 (only in python 3)
        # return statistics.mode(nums)

        # Method 2 (Over time)
        # count of how many times object occurs in list. 
        # Assume the first element occur the most times
        maxCount = nums.count(nums[0])     
        maxValue = nums[0]
        for i in nums:
            if nums.count(i) > maxCount:
                maxValue = i
        return maxValue


sl = Solution()
list1 = [3, 2, 3]
list2 = [2, 2, 1, 1, 1, 2, 2]
print(sl.majorityElement(list1))
print(sl.majorityElement(list2))
