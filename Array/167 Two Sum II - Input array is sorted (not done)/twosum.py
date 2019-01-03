class Solution(object):
    def twoSum(self, numbers, target):
        j = 1
        List = []
        for i in range(len(numbers)):
            while j < (len(numbers) - i):
                if numbers[i] + numbers[j] == target:
                    if numbers.index(numbers[i]) != numbers.index(numbers[j]):
                        getIndex_I = numbers.index(numbers[i]) + 1
                        getIndex_J = numbers.index(numbers[j]) + 1
                        List.append(getIndex_I)
                        List.append(getIndex_J)

                j += 1
        return List


sl = Solution()
print(sl.twoSum([2, 7, 11, 15], 9))  # [1,2]
print(sl.twoSum([2, 7, 11, 15], 13))  # [1,3]

print(sl.twoSum([0, 0, 3, 4], 0))  # [1,2]
print(sl.twoSum([0, 0, 0, 4], 0))
