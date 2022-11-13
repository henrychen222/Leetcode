class Solution(object):
    def maxAbsoluteSum(self, a):
        s = [a[0]]
        for e in a[1:]:
            s.append(s[-1] + e)
        s = sorted(s)
        max = abs(s[0])
        t = s[0]
        for x in s[1:]:
           cur = abs(x)
           max = cur if cur > max else max
           cur = abs(t-x)
           max = cur if cur > max else max
           t = x
        return max


if __name__ == "__main__":
    s = Solution()
    nums = [1, -3, 2, 3, -4]
    nums2 = [2, -5, 1, -4, 3, -2]
    print(s.maxAbsoluteSum(nums)) // 5
    print(s.maxAbsoluteSum(nums2)) // 8
