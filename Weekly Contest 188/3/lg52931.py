""" 
5.9 night
https://leetcode.com/contest/weekly-contest-188/problems/minimum-time-to-collect-all-apples-in-a-tree/
https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/  Tree
"""
from typing import List


class Solution:
    def minTime(self, n: int, edges: List[List[int]], hasApple: List[bool]) -> int:
        graph = [[] for __ in range(n)]
        for x in edges:
            graph[x[0]].append(x[1])
            graph[x[1]].append(x[0])

        def dfs(node, par):
            ans = 0
            nhas = hasApple[node]
            for nxt in graph[node]:
                if nxt != par:
                    has, res = dfs(nxt, node)
                    if has:
                        ans += res + 2
                    nhas |= has
            return nhas, ans

        has, res = dfs(0, -1)
        return res


if __name__ == "__main__":
    s = Solution()
    n = 7
    edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]]

    hasApple = []
    hasApple.append(False)
    hasApple.append(False)
    hasApple.append(True)
    hasApple.append(False)
    hasApple.append(True)
    hasApple.append(True)
    hasApple.append(False)

    hasApple2 = []
    hasApple2.append(False)
    hasApple2.append(False)
    hasApple2.append(True)
    hasApple2.append(False)
    hasApple2.append(False)
    hasApple2.append(True)
    hasApple2.append(False)

    hasApple3 = []
    hasApple3.append(False)
    hasApple3.append(False)
    hasApple3.append(False)
    hasApple3.append(False)
    hasApple3.append(False)
    hasApple3.append(False)
    hasApple3.append(False)

    print(s.minTime(n, edges, hasApple))  # 8
    print(s.minTime(n, edges, hasApple2))  # 6
    print(s.minTime(n, edges, hasApple3))  # 0
