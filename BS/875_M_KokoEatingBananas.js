/**
 * 03/26/22 evening
 * https://leetcode.com/problems/koko-eating-bananas/
 */

// Accepted --- 72ms 97.97%
let a, h;
const minEatingSpeed = (piles, H) => {
    a = piles, h = H;
    return BinarySearch(0, Number.MAX_SAFE_INTEGER)
};

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (possible(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
};

const possible = (k) => {
    let needHour = 0;
    for (const x of a) needHour += Math.ceil(x / k);
    return needHour > h;
};

const pr = console.log;
const main = () => {
  let piles = [3,6,7,11], h = 8;
  let piles2 = [30,11,23,4,20], h2 = 5;
  let piles3 = [30,11,23,4,20], h3 = 6;
  pr(minEatingSpeed(piles, h))
  pr(minEatingSpeed(piles2, h2))
  pr(minEatingSpeed(piles3, h3))
};

main()