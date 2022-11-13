"""
https://www.tutorialspoint.com/find-minimum-time-to-finish-all-jobs-with-given-constraints-in-python
"""

# WA
class Solution(object):
    def is_valid(self, time, K, job):
        n = len(job)
        count = 1
        curr_time = 0
        i = 0
        while i < n:
            if curr_time + job[i] > time:
                curr_time = 0
                count += 1
            else:
                curr_time += job[i]
                i += 1
        return count <= K

    def minimumTimeRequired(self, job, K):
        n = len(job)
        end = 0
        begin = 0
        for i in range(n):
            end += job[i]
        res = end
        job_max = max(job)
        while begin <= end:
            print(res)
            mid = int((begin + end) >> 1)
            if mid >= job_max and self.is_valid(mid, K, job):
                res = min(res, mid)
                end = mid - 1
            else:
                begin = mid + 1
        return res


if __name__ == "__main__":
    s = Solution()
    jobs = [3, 2, 3]
    k = 3
    jobs2 = [1, 2, 4, 7, 8]
    k2 = 2
    print(s.minimumTimeRequired(jobs, k))
    print(s.minimumTimeRequired(jobs2, k2))
