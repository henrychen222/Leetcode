"""
5.17 night
Time Limit Exceed: Wrong
"""

from typing import List


class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        n = len(nums)
        j = ans = 0
        mx = mi = nums[0]
        # counter_list = list(enumerate(nums))
        # print(counter_list)
        for i, v in enumerate(nums):
            mx = max(mx, v)
            mi = min(mi, v)
            # print(mx)
            # print(mi)
            while mx - mi > limit:
                if mx == nums[j]:
                    mx = max(nums[j + 1: i + 1])   # i+1 not covered
                if mi == nums[j]:
                    mi = min(nums[j + 1: i + 1])
                j += 1

            ans = max(ans, i - j + 1)
        return ans


if __name__ == "__main__":
    s = Solution()
    nums = [8, 2, 4, 7]
    limit = 4
    nums2 = [10, 1, 2, 4, 7, 2]
    limit2 = 5
    nums3 = [4, 2, 2, 2, 4, 4, 2, 2]
    limit3 = 0

    print(s.longestSubarray(nums, limit))  # 2
    print(s.longestSubarray(nums2, limit2))  # 4
    print(s.longestSubarray(nums3, limit3))  # 3
