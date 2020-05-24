""" 
5.9 night
https://leetcode.com/contest/weekly-contest-188/problems/minimum-time-to-collect-all-apples-in-a-tree/
https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/  Tree
"""


class Solution(object):
    def minTime(self, n, edges, hasApple):
        graph = [[] for _ in xrange(n)]
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
        hasSubtree = hasApple[:]

        def dfs1(node, par=-1):
            has = hasApple[node]
            for nei in graph[node]:
                if nei != par:
                    has |= dfs1(nei, node)
            hasSubtree[node] = has
            return has
        dfs1(0)

        def dfs2(node, par=-1):
            if not hasSubtree[node]:
                return 0
            ans = 0
            for nei in graph[node]:
                if nei != par:
                    if hasSubtree[nei]:
                        ans += 2 + dfs2(nei, node)
            #print("A", ans, node, par)
            return ans

        #print("!", hasSubtree)
        if not hasSubtree[0]:
            return 0
        return dfs2(0)


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
