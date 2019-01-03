class Solution(object):
    def containsNearbyDuplicate(self, nums, k):
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if (nums[i] == nums[j]):
                    index_i = nums.index(nums[i])
                    index_j = nums.index(nums[j])
                    print(index_i)
                    print(index_j)
                    print(abs(index_i - index_j))
                    print
                    if abs(index_i - index_j) <= k:
                        return True
        return False
    

sl = Solution()
list1 = [1, 2, 3, 1]
list2 = [1, 0, 1, 1]
list3 = [1, 2, 3, 1, 2, 3]
print(sl.containsNearbyDuplicate(list1, 3))
print(sl.containsNearbyDuplicate(list2, 1))
print(sl.containsNearbyDuplicate(list3, 2))


print(sl.containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
