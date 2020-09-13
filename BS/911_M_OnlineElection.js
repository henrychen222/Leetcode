/**
 * 9.12 afternoon
 * https://leetcode.com/problems/online-election/
 */

// time limit 87/97
function TopVotedCandidate(persons, times) {
    this.persons = persons;
    this.times = times;
};

TopVotedCandidate.prototype.q = function (t) {
    let n = this.times.length;
    let max = this.times[n - 1];
    let data = [];
    if (t > max) {
        data = this.persons;
    } else {
        let idx;
        for (let i = 1; i < n; i++) {
            if (this.times[i] > t) {
                idx = i - 1;
                break;
            } else if (this.times[i] == t) {
                idx = i;
                break;
            }
        }
        data = this.persons.slice(0, idx + 1);
    }
    let element = [...new Set(data)];
    // console.log(data)
    let res = [];
    for (const e of element) {
        res.push([e, getFrequency(data, e)]);
    }
    res.sort((a, b) => {
        if (a[1] == b[1]) return data.lastIndexOf(b[0]) - data.lastIndexOf(a[0]);
        return b[1] - a[1];
    });
    // console.log(res)
    return res[0][0];
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let tc = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);
    console.log(tc.q(3)); // 0
    console.log(tc.q(12)); // 1
    console.log(tc.q(25)); // 1
    console.log(tc.q(15)); // 0
    console.log(tc.q(24)); // 0
    console.log(tc.q(8)); // 1

    console.log("")
    let tc_debug1 = new TopVotedCandidate([0, 0, 0, 0, 1], [0, 6, 39, 52, 75]);
    console.log(tc_debug1.q(45)); // 0
    console.log(tc_debug1.q(49)); // 0
    console.log(tc_debug1.q(59)); // 0
    console.log(tc_debug1.q(68)); // 0
    console.log(tc_debug1.q(42)); // 0
    console.log(tc_debug1.q(37)); // 0
    console.log(tc_debug1.q(99)); // 0
    console.log(tc_debug1.q(26)); // 0
    console.log(tc_debug1.q(78)); // 0
    console.log(tc_debug1.q(43)); // 0

    console.log("")
    let tc_debug2 = new TopVotedCandidate([0, 0, 1, 1, 2], [0, 67, 69, 74, 87]);
    console.log(tc_debug2.q(4)); // 0
    console.log(tc_debug2.q(62)); // 0
    console.log(tc_debug2.q(100)); // 1
    console.log(tc_debug2.q(88)); // 1
    console.log(tc_debug2.q(70)); // 0
    console.log(tc_debug2.q(73)); // 0
    console.log(tc_debug2.q(22)); // 0
    console.log(tc_debug2.q(75)); // 1
    console.log(tc_debug2.q(29)); // 0
    console.log(tc_debug2.q(10)); // 0
}

main()