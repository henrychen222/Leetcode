class Solution(object):
    def reverseWords(self, s):
        # split the string into an array(list)
        list = s.split(" ")
        # print (list)
        # print (list[0])
        for i in range(len(list)):
            # Extended Slices to reverse each list items 
            list[i] = list[i][::-1]
        new = " ".join(list)
        return new


sl = Solution()
print(sl.reverseWords("Let's take LeetCode contest"))
