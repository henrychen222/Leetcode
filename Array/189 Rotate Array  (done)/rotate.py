class Solution(object):
    def rotate(self, nums, k):
        while k > 0:
            lastItem = nums[-1]
            del nums[-1]
            nums.insert(0, lastItem)
            k -= 1
        return nums          # no need to submit this return statement in leetcode

sl = Solution()
print(sl.rotate([1, 2, 3, 4, 5, 6, 7], 3))
print(sl.rotate([-1, -100, 3, 99], 2))
