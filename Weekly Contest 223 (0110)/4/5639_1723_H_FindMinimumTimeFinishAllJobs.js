// https://leetcode.com/contest/weekly-contest-223/problems/find-minimum-time-to-finish-all-jobs/
const getMax = (arr, n) => {
    let result = arr[0];
    for (let i = 1; i < n; i++)
        if (arr[i] > result)
            result = arr[i];
    return result;
}

const isPossible = (time, K, job, n) => {
    let cnt = 1;
    let curr_time = 0;
    for (let i = 0; i < n;) {
        if (curr_time + job[i] > time) {
            curr_time = 0;
            cnt++;
        }
        else {
            curr_time += job[i];
            i++;
        }
    }
    return (cnt <= K);
};

const minimumTimeRequired = (job, K) => {
    let n = job.length;
    let end = start = 0;
    for (let i = 0; i < n; ++i) {
        end += job[i];
    }
    let ans = end;
    let job_max = getMax(job, n);
    while (start <= end) {
        let mid = (start + end) / 2;
        if (mid >= job_max && isPossible(mid, K, job, n)) {
            ans = Math.min(ans, mid);
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return ans;
};

const main = () => {
    let jobs = [3, 2, 3], k = 3;
    let jobs2 = [1, 2, 4, 7, 8], k2 = 2;
    let job3 = [10, 7, 8, 12, 6, 8], k3 = 3;
    console.log(minimumTimeRequired(jobs, k));
    console.log(minimumTimeRequired(jobs2, k2));
    console.log(minimumTimeRequired(job3, k3));
};

main()