class Solution(object):
    def searchInsert(self, nums, target):
        if target < nums[0]:
            print ("smaller than the first element, not inside the array")
            # enlarge the array should return the first element index of the new array
            return nums.index(nums[0])
        if target > nums[len(nums) - 1]:
            print ("larger than the last element, not inside the array")
            # enlarge the array should return the last element index of the new array
            # get the last element index of the old array and plus 1 for the last element of the new array
            return (nums.index(nums[len(nums) - 1])) + 1 
          
        for i in range(len(nums)):
            if target not in nums:
                print ("Middle, not inside the array")
                if (target > nums[i-1] and target < nums[i]):
                    return nums.index(nums[i])
            if nums[i] == target:
                print("inside the array")
                return nums.index(target)


sl = Solution()
list = [1, 3, 5, 6]
print("this is 5", sl.searchInsert(list, 5))    # 2   in
print("")
print("this is 2", sl.searchInsert(list, 2))    # 1   not in
print("")
print("this is 7", sl.searchInsert(list, 7))    # 4   not in
print("")
print("this is 0", sl.searchInsert(list, 0))    # 0   not in
print("")
print("this is 4", sl.searchInsert(list, 4))    # 2   in
