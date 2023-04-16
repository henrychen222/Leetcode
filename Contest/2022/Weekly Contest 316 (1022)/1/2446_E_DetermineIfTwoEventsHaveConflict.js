/*
 * 10/22/22 evening
 * https://leetcode.com/contest/weekly-contest-316/problems/determine-if-two-events-have-conflict/
 */

const pr = console.log;

// Accepted
const haveConflict = (a, b) => {
    a = a.map(s => convertTimeToNumber(s));
    b = b.map(s => convertTimeToNumber(s));
    // pr(a, b);
    return overlap(a[0], a[1], b[0], b[1])
};

const overlap = (start1, end1, start2, end2) => (start1 >= start2 && start1 <= end2) || (start2 >= start1 && start2 <= end1)

const convertTimeToNumber = (s) => {
    let [h, m] = s.split(":").map(Number);
    return h + m / 60;
};

const main = () => {
    let event1 = ["01:15","02:00"], event2 = ["02:00","03:00"];
    let event1_2= ["01:00","02:00"], event2_2 = ["01:20","03:00"];
    let event1_3= ["10:00","11:00"], event2_3= ["14:00","15:00"]
    let event1_debug1 =  ["14:13","22:08"], event2_debug1 =["02:40","08:08"];
    pr(haveConflict(event1, event2))
    pr(haveConflict(event1_2, event2_2))
    pr(haveConflict(event1_3, event2_3))
    pr(haveConflict(event1_debug1, event2_debug1)) // false
};

main()
