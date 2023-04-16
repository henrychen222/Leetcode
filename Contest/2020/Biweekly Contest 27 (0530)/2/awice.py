# 5.30 morning
class Solution(object):
    def hasAllCodes(self, s, k):
        n = len(s)
        seen = set()
        for i in xrange(n - k + 1):
            seen.add(s[i:i+k])
        print(seen)
        print(2 ** k)
        return len(seen) == 2 ** k


if __name__ == "__main__":
    s = "00110110"
    k = 2
    s2 = "00110"
    k2 = 2
    s3 = "0110"
    k3 = 1
    s4 = "0110"
    k4 = 2
    s5 = "0000000001011100"
    k5 = 4

    sl = Solution()
    print(sl.hasAllCodes(s, k))
    print(sl.hasAllCodes(s2, k2))
    print(sl.hasAllCodes(s3, k3))
    print(sl.hasAllCodes(s4, k4))
    print(sl.hasAllCodes(s5, k5))
