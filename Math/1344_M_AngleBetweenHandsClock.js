/**
 * 03/13/21 afternoon
 * https://leetcode.com/problems/angle-between-hands-of-a-clock/
 */

const pr = console.log;

// Accepted --- 80ms 47.31%
const angleClock = (h, m) => {
    let am = 360 * (m / 60);
    let ah = 360 * ((h + m / 60) / 12);
    let diff = am > ah ? am - ah : ah - am;
    return diff > 180 ? 360 - diff : diff;
};

// Accepted --- 80ms 47.31%
const angleClock3 = (h, m) => {
    let am = 360 * (m / 60);
    let ah = 360 * ((h + (m / 60)) / 12);
    let diff = am > ah ? am - ah : ah - am;
    return diff > 180 ? 360 - diff : diff;
};

// Accepted --- 80ms 47.31%
const angleClock2 = (h, m) => {
    let am = 360 * (m / 60) % 360;
    let ah = 360 * ((h + (m / 60)) / 12) % 360;
    let diff = am > ah ? am - ah : ah - am;
    return diff > 180 ? 360 - diff : diff;
};

// Accepted --- 76ms 76.34%
const abs = Math.abs;
const angleClock1 = (h, m) => {
    let as = 360 * (m / 60) % 360;
    let ah = 360 * ((h + (m / 60)) / 12) % 360;
    let diff = abs(as - ah);
    // pr(as, ah, between, diff);
    return diff > 180 ? 360 - diff : diff;
};

const main = () => {
    let hour = 12,
        minutes = 30;
    let hour2 = 3,
        minutes2 = 30;
    let hour3 = 3,
        minutes3 = 15;
    let hour4 = 4,
        minutes4 = 50;
    let hour5 = 12,
        minutes5 = 0;
    let hour_debug1 = 6,
        minutes_debug1 = 5;
    let hour_debug2 = 1,
        minutes_debug2 = 57;
    pr(angleClock(hour, minutes));
    pr(angleClock(hour2, minutes2));
    pr(angleClock(hour3, minutes3));
    pr(angleClock(hour4, minutes4));
    pr(angleClock(hour5, minutes5));
    pr(angleClock(hour_debug1, minutes_debug1)); // 152.50000
    pr(angleClock(hour_debug2, minutes_debug2)); // 76.50000
};

main()