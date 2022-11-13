"""
07/03/21 night
https://stackoverflow.com/questions/66056971/how-to-compress-python-for-loop
"""

from collections import defaultdict


class Solution(object):
    def longestCommonSubpath(self, n, paths):
        return self.go(paths)

    def go(self, data):
        pairs = defaultdict(list)
        for i, lst in enumerate(data):
            for k, pair in enumerate(zip(lst, lst[1:])):
                pairs[pair].append((i, k))

        # print(pairs)
        most = max([len(lst) for lst in pairs.values()])
        pairs = {k: v for k, v in pairs.items() if len(v) == most}
        # print(most)
        # print(pairs)
        triples = [k + (data[v[0][0]][v[0][1]+2],)
                   for k, v in pairs.items()
                   if len(set(data[i][k+2] for (i, k) in v if i < len(data) and k + 2 < len(data[0]))) == 1]
        # triples = []
        # for k, v in pairs.items():
        #     se = set()
        #     for (i, k) in v:
        #             se.add(paths[i][k+2])
        #     if len(se) == 1:
        #        triples.append(k + (data[v[0][0]][v[0][1]+2]))
        print(triples)
        if (len(triples) == 0):
            return 0
        res = len(triples[0])
        return res


if __name__ == "__main__":
    s = Solution()
    n = 5
    paths = [[0, 1, 2, 3, 4], [2, 3, 4], [4, 0, 1, 2, 3]]
    data = [[1, 2, 4, 5, 6, 7,  9], [
        1, 2, 3, 4, 5, 6,  8, 9], [1, 2,  4, 5, 6, 7, 8]]
    print(s.longestCommonSubpath(n, paths))
    print(s.longestCommonSubpath(10, data))
