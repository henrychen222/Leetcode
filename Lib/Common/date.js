/*
 * 11/12/23 afternoon
 * https://leetcode.com/contest/weekly-contest-371/problems/high-access-employees/
 */

// Date
const calDays = (currentDate, futureDate) => { let res = (futureDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24); res = Math.ceil(res) + 1; res = Math.max(res, 0); return res; };

const calMinutes = (s, t) => { // HH:MM
    let [hs, ms] = s.split(":").map(Number), [ht, mt] = t.split(":").map(Number);
    let ds = new Date(2023, 1, 1, hs, ms, 0), dt = new Date(2023, 1, 1, ht, mt, 0);
    let seconds = Math.abs(ds.getTime() - dt.getTime()) / 1000, miutes = seconds / 60;
    return miutes;
};