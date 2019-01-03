class Solution(object):
    def maxSubArray(self, nums):
        # Kadane's algorithm
        max_ending_here = max_so_far = nums[0]
        for i in nums[1:]:
            max_ending_here = max(i, max_ending_here + i)
            max_so_far = max(max_so_far, max_ending_here)
        return max_so_far


sl = Solution()
list1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(sl.maxSubArray(list1))
