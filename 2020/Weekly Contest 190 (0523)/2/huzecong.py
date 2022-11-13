# 5.23 night
class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        value = [0]
        for c in s:
            # print(c in "aeiou")
            # print(int(c in "aeiou"))
            value.append(value[-1] + int(c in "aeiou"))
        # print(value)
        ans = 0
        for i in range(k, len(s) + 1):
            ans = max(ans, value[i] - value[i - k])
        return ans


if __name__ == "__main__":
    solution = Solution()
    s = "abciiidef"
    k = 3
    s2 = "aeiou"
    k2 = 2
    s3 = "leetcode"
    k3 = 3
    s4 = "rhythms"
    k4 = 4
    s5 = "tryhard"
    k5 = 4
    print(solution.maxVowels(s, k))
    print(solution.maxVowels(s2, k2))
    print(solution.maxVowels(s3, k3))
    print(solution.maxVowels(s4, k4))
    print(solution.maxVowels(s5, k5))
