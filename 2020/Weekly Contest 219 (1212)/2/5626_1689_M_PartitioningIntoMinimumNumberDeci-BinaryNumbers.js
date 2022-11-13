/**
 * 12.12 evening
 * https://leetcode.com/contest/weekly-contest-219/problems/partitioning-into-minimum-number-of-deci-binary-numbers/ 
 */


// Accepted --- 100ms
const minPartitions = (s) => {
    let res = 0;
    for (const c of s) {
        res = Math.max(res, c - '0');
    }
    return res;
};

/**
 * https://tutorialspoint.dev/algorithm/mathematical-algorithms/represent-number-sum-minimum-possible-psuedobinary-numbers
 * https://www.geeksforgeeks.org/represent-number-sum-minimum-possible-psuedobinary-numbers/
 * https://stackoverflow.com/questions/39509271/find-minimum-number-of-binary-decimals-for-a-given-input-n
 */

// TLE
const minPartitions1 = (s) => {
    let n = BigInt(s);
    let cnt = 0;
    while (n != 0) {
        let temp = n, m = 0n, p = 1n;
        while (temp != 0n) {
            let rem = temp % 10n;
            temp = temp / 10n;
            if (rem != 0n)
                m += p;
            p *= 10n;
        }
        cnt++;
        n = n - m;
    }
    return cnt;
};

const main = () => {
    let s = "32";
    let s2 = "82734";
    let s3 = "27346209830709182346";
    console.log(minPartitions(s));
    console.log(minPartitions(s2));
    console.log(minPartitions(s3));
};

main()
