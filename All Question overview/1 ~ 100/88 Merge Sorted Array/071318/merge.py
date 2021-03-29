class Solution(object):
    def merge(self, nums1, m, nums2, n):
        for i in range(len(nums1)):
            if nums1[i] == 0:
                del nums1[i]
        return nums1


sl = Solution()
list1 = [1, 2, 3, 0, 0, 0]
list2 = [2, 5, 6]
print(sl.merge(list1, len(list1), list2, len(list2)))
