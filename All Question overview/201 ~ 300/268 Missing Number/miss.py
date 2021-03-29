class Solution(object):
    # # Method 1 work but time over
    # def missingNumber(self, nums):
    #         # j increase from 0 to the largest number in the list
    #         for j in range((len(nums)+1)):
    #           if j not in nums:
    #             return j

    def missingNumber(self, nums):
        #   return nums[-1]*(nums[-1] + nums[0]) / 2 - sum(nums)
        # return sum(range(nums[0], nums[-1]+1)) - sum(nums)
        #   return (nums[-1] * (nums[-1] + 1))/2

        # b = [x for x in range(nums[0], nums[-1] + 1)]
        # return b

        # original_list = [x for x in range(nums[0], nums[-1] + 1)]
        # num_list = set(nums)
        # print (num_list)
        # return (list(num_list ^ set(original_list)))
  
        # Method 2 GOT ACCEPTED
        n = len(nums)
        total = (n)*(n+1)/2     # the sum from 0 to len(nums)
        sum_of_nums = sum(nums)   # the actual sum (missing element) 
        return total - sum_of_nums  # minus got the missing element


sl = Solution()
list1 = [3, 0, 1]
list2 = [9, 6, 4, 2, 3, 5, 7, 0, 1]
print(sl.missingNumber(list1))
print(sl.missingNumber(list2))
