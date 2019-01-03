class Solution(object):
    def firstUniqChar(self, s):
        # arrange memory
        character = [0] * 26
        # print (character)

        # first count all character occurence
        for i in s:
            character[ord(i) - 97] += 1
        # iterate over again with the previous string until find the character only occu
        for j in range(len(s)):
            if character[ord(s[j]) - 97] == 1:
                return j
        return -1

sl = Solution()
print(sl.firstUniqChar("leetcode"))
print(sl.firstUniqChar("loveleetcode"))
