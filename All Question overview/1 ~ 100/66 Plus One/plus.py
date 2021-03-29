class Solution(object):
    def plusOne(self, digits):
        # Convert array of integers to string in Python
        newString = ""
        for i in digits:
            newString += str(i)
        print (newString)

        # get the plus one number
        plusone = str(int(newString) + 1)
        print(plusone)

        # Turn a Single number into single digits Array
        newList = []
        for x in plusone:
            newList.append(int(x))
        # Method 2 List Comprehension
        # newList = [int(x) for x in str(plusone)]
        return newList


        # Wrong Answer
        # lastItem = digits[-1]
        # # lastItem = digits[len(digits)-1]
        # del digits[-1]
        # # del digits[len(digits)-1]

        # newItem = lastItem + 1
        # print (newItem)
        # if newItem == 10:
        #     digits.append(1)
        #     digits.append(0)
        # else:
        #     digits.append(newItem)
        #     # digits.insert(-1,newItem)
        # return digits


sl = Solution()
print(sl.plusOne([1, 2, 3]))
print(sl.plusOne([4, 3, 2, 1]))

print(sl.plusOne([9]))
