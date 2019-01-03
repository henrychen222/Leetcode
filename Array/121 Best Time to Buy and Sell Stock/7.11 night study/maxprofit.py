class Solution(object):
    def maxProfit(self, prices):
        maxDiff = 0
        if len(prices) == 0:
            print("list is empty")
        elif len(prices) == 1:
            print("no profit")
        else:
            maxDiff = prices[1]-prices[0]
            for i in range(len(prices)):
                for j in range(i+1, len(prices)):
                    if (prices[j]-prices[i]) > maxDiff:
                        maxDiff = prices[j]-prices[i]
            if maxDiff < 0:
                maxDiff = 0
        return maxDiff


sl = Solution()
print(sl.maxProfit([7, 1, 5, 3, 6, 4]))
print(sl.maxProfit([7, 6, 4, 3, 1]))
print(sl.maxProfit([]))
print(sl.maxProfit([1]))
