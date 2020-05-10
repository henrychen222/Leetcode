""" 
5.9 night
https://leetcode.com/contest/weekly-contest-188/problems/minimum-time-to-collect-all-apples-in-a-tree/
https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/  Tree
"""

from collections import defaultdict


class Solution(object):
    def minTime(self, n, edges, hasApple):
        """
        :type n: int
        :type edges: List[List[int]]
        :type hasApple: List[bool]
        :rtype: int
        """
        adj = defaultdict(list)
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
        r = [0]

        def f(u, p):
            s = hasApple[u]
            for v in adj[u]:
                if v == p:
                    continue
                if f(v, u):
                    r[0] += 2
                    s = True
            return s
        f(0, -1)
        return r[0]


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