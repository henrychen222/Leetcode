class Solution(object):
    def checkRecord(self, s):
        count = 0
        # list = s.split(" ")
        # print(list)
        for i in range(len(s)):
            # more than two continuous 'L'
            if s[i-2] =='L':
                if s[i-1] == 'L':
                    if s[i] == 'L':
                        return False
            if s[i] == 'A':
                count += 1
        if count > 1:
            return False
        return True

sl = Solution()
print(sl.checkRecord("PPALLP"))   # True
print(sl.checkRecord("PPALLL"))   # False
print(sl.checkRecord("PPAAPP"))   # False


