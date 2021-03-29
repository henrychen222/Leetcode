class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        dupCount = 0
        for i in range((len(nums)-1)):
          for j in range(i+1, len(nums)):
              if nums[i] == nums[0]:
                  dupCount += 1
                  del nums[j]
        return len(nums)


sl = Solution()
list1 = [1, 1, 2]
list2 = [0, 0, 1, 1, 0, 3, 0, 12]
print(sl.removeDuplicates(list1))
print(sl.removeDuplicates(list2))
