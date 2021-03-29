class Solution(object):
    def moveZeroes(self, nums):
        for i in range(len(nums)):
            if nums[i] == 0:
                # del nums[i]      del removes the item at a specific index, can only remove once. wrong here
                nums.remove(nums[i])
                nums.append(0)
        return nums


sl = Solution()
print(sl.moveZeroes([0, 1, 0, 3, 12]))
print(sl.moveZeroes([0, 0, 1, 1, 0, 3, 0, 12]))
print(sl.moveZeroes([0, 0, 1]))
print(sl.moveZeroes([0, 0, 0, 1]))
print(sl.moveZeroes([0, 0, 0, 0, 1]))