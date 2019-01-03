

class Solution(object):

    def detectCapitalUse(self, word):
        # for i in range(len(word)):
        #     print ("words is:", word[i])
        #     if word[i].isupper():
        #         return True
        #     elif word[i].islower():
        #         return True

        print("", word[1:])
        if word.isupper():
            return True
        elif word.islower():
            return True
        elif (65 <= ord(word[0]) <= 90):
            if word[1:].islower():
                return True
        return False

        


sl = Solution()
print(sl.detectCapitalUse("USA"))
print(sl.detectCapitalUse("leetcode"))
print(sl.detectCapitalUse("Google"))
print(sl.detectCapitalUse("flaG"))


