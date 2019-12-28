"""
12.22 night
https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring
"""

import collections


class Solution:
    # 164ms, 14.9M, faster than 100%
    def maxFreq(self, s: str, maxLetters: int, minSize: int, maxSize: int) -> int:
        i, occurence, result = 0, collections.defaultdict(int), 0
        for i in range(len(s) - minSize + 1):
            word = s[i: i + minSize]
            occurence[word] += 1
            if len(set(word)) <= maxLetters:
                result = max(result, occurence[word])
        return result

    # 1452ms, 124.3M, faster than 50%
    def maxFreq2(self, s: str, maxLetters: int, minSize: int, maxSize: int) -> int:
        counts, n = collections.defaultdict(int), len(s)
        for i in range(n):
            for j in range(i, min(i + maxSize, n)):
                word = s[i: j + 1]
                if len(set(word)) > maxLetters:
                    break
                if len(word) >= minSize:
                    counts[word] += 1
        return max(counts.values(), default=0)

    # 1132ms, 124.2M, faster than 50%
    def maxFreq3(self, s: str, maxLetters: int, minSize: int, maxSize: int) -> int:
        counts, n = collections.defaultdict(int), len(s)
        for i in range(n):
            for j in range(i + minSize - 1, min(i + maxSize, n)):
                word = s[i: j + 1]
                if len(set(word)) > maxLetters:
                    break
                counts[word] += 1
        return max(counts.values(), default=0)


if __name__ == "__main__":
    s = Solution()

    s1 = "aababcaab"
    maxLetters1 = 2
    minSize1 = 3
    maxSize1 = 4
    print(s.maxFreq(s1, maxLetters1, minSize1, maxSize1))  # 2
    print(s.maxFreq2(s1, maxLetters1, minSize1, maxSize1))  # 2
    print(s.maxFreq3(s1, maxLetters1, minSize1, maxSize1))  # 2

    s2 = "aaaa"
    maxLetters2 = 1
    minSize2 = 3
    maxSize2 = 3
    print("")
    print(s.maxFreq(s2, maxLetters2, minSize2, maxSize2))  # 2
    print(s.maxFreq2(s2, maxLetters2, minSize2, maxSize2))  # 2
    print(s.maxFreq3(s2, maxLetters2, minSize2, maxSize2))  # 2

    s3 = "aabcabcab"
    maxLetters3 = 2
    minSize3 = 2
    maxSize3 = 3
    print("")
    print(s.maxFreq(s3, maxLetters3, minSize3, maxSize3))  # 3
    print(s.maxFreq2(s3, maxLetters3, minSize3, maxSize3))  # 3
    print(s.maxFreq3(s3, maxLetters3, minSize3, maxSize3))  # 3

    s4 = "abcde"
    maxLetters4 = 2
    minSize4 = 3
    maxSize4 = 3
    print("")
    print(s.maxFreq(s4, maxLetters4, minSize4, maxSize4))  # 0
    print(s.maxFreq2(s4, maxLetters4, minSize4, maxSize4))  # 0
    print(s.maxFreq3(s4, maxLetters4, minSize4, maxSize4))  # 0
