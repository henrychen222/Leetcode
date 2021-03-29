class Solution(object):
    def reverseStr(self, s, k):
        # if (k <= len(s) <= 2k):
        #     s = s[:k:-1]
        # elif len(s) < k:
        #     s = s[::-1]
        # else:
        #     s = s[::2k]
        # return s

        #reverse first k character for every 2k characters counting from the start of the string
        s = s[:k:-1]
        
        return s

sl = Solution()
print(sl.reverseStr("abcdefg", 2))  # "bacdfeg"
