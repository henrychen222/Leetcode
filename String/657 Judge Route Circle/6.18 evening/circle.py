class Solution(object):
    def judgeCircle(self, moves):
        countU = countD = countL = countR = 0
        for i in range(len(moves)):
            if moves[i] == 'U':
                countU +=1
            if moves[i] == 'D':
                countD +=1
            if moves[i] == 'L':
                countL +=1
            if moves[i] == 'R':
                countR +=1
        if (countU == countD) and (countL == countR):
            return True
        else:
            return False
            


sl = Solution()
print(sl.judgeCircle("UD"))
print(sl.judgeCircle("LL"))
print(sl.judgeCircle("UUDLDR"))   
