"""
12.28 evening
https://leetcode.com/problems/replace-the-substring-for-balanced-string/
"""
from collections import Counter


class Solution():
    """
    Accepted--- 260ms, 13.4MB, 73.77%
    sliding window
    https://blog.csdn.net/zjucor/article/details/102648725
    """

    def balancedString(self, s: str) -> int:
        d = Counter(s)
        target = len(s) // 4
        res = len(s)
        i = 0
        for j, c in enumerate(s):
            d[c] -= 1
            while i < len(s) and d['Q'] <= target and d['W'] <= target and d['E'] <= target and d['R'] <= target:
                res = min(res, j-i+1)
                d[s[i]] += 1
                i += 1
        return res

    """ 
      Accepted--- 236ms, 17.7MB, 78.02%
      Dynamic Programming
      https://codeplot.top/2019/10/20/leetcode-weekly-contest-159-%E5%91%A8%E8%B5%9B-5232-%E6%9B%BF%E6%8D%A2%E5%AD%90%E4%B8%B2%E5%BE%97%E5%88%B0%E5%B9%B3%E8%A1%A1%E5%AD%97%E7%AC%A6%E4%B8%B2-1234-Replace-the-Substring-for-Balanced-String/
    """

    def balancedString2(self, s: str) -> int:
        c = {'Q': 0, 'W': 1, 'E': 2, 'R': 3}
        d = [0 for i in range(4)]
        for ch in s:
            d[c[ch]] += 1
        t = len(s) // 4
        for i in range(len(d)):
            d[i] -= t
        dp = [0 for i in range(len(s))]
        d2 = [0 for i in range(4)]
        i = 0
        while i < len(s):
            if d2[0] >= d[0] and d2[1] >= d[1] and d2[2] >= d[2] and d2[3] >= d[3]:
                break
            else:
                d2[c[s[i]]] += 1
            i += 1
        if i < 2:
            return i
        dp[0] = i
        minv = i
        for i in range(1, len(s)):
            d2[c[s[i-1]]] -= 1
            j = i + dp[i-1] - 1
            flag = False
            while j < len(s):
                if d2[0] >= d[0] and d2[1] >= d[1] and d2[2] >= d[2] and d2[3] >= d[3]:
                    flag = True
                    break
                else:
                    d2[c[s[j]]] += 1
                j += 1
            if not flag and not(d2[0] >= d[0] and d2[1] >= d[1] and d2[2] >= d[2] and d2[3] >= d[3]):
                break
            dp[i] = j - i
            minv = min(minv, dp[i])
        return minv


if __name__ == "__main__":
    s = Solution()
    s1 = "QWER"
    s2 = "QQWE"
    s3 = "QQQW"
    s4 = "QQQQ"

    print(s.balancedString(s1))
    print(s.balancedString(s2))
    print(s.balancedString(s3))
    print(s.balancedString(s4))

    print("")
    print(s.balancedString2(s1))
    print(s.balancedString2(s2))
    print(s.balancedString2(s3))
    print(s.balancedString2(s4))
