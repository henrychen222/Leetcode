/**
 * 10.31 evening
 * https://leetcode.com/contest/weekly-contest-213/problems/furthest-building-you-can-reach/
 */

// Accepted
const furthestBuilding = (heights, bricks, ladders) => {
    let n = heights.length;
    let diff = [];
    for (let i = 0; i + 1 < n; i++) {
        diff.push(heights[i + 1] - heights[i]);
    }
    // console.log(diff);
    let tmp = [...diff].sort((a, b) => b - a).filter(x => x > 0);
    // tmp = [...new Set(tmp)];
    // console.log(tmp);
    let cnt = 0;
    for (let i = 0; i < diff.length; i++) {
        if (diff[i] <= 0)  {
            cnt++;
            continue;
        }
        // console.log(tmp.indexOf(diff[i] + 1), ladders)
        if ((tmp.indexOf(diff[i]) + 1) <= ladders) {
            if (ladders > 0) {
                ladders--;
                cnt++;
            }
        } else {
            if (bricks - diff[i] >= 0) {
                bricks -= diff[i];
                cnt++;
            } else {
                if (ladders > 0) {
                    ladders--;
                    cnt++;
                } else {
                    break;
                }
            }
        }
        // console.log(bricks, ladders, i)
    }
    return cnt;
};

const main = () => {
    let heights = [4, 2, 7, 6, 9, 14, 12], bricks = 5, ladders = 1;
    let heights2 = [4, 12, 2, 7, 3, 18, 20, 3, 19], bricks2 = 10, ladders2 = 2;
    let heights3 = [14, 3, 19, 3], bricks3 = 17, ladders3 = 0;
    console.log(furthestBuilding(heights, bricks, ladders));
    console.log(furthestBuilding(heights2, bricks2, ladders2));
    console.log(furthestBuilding(heights3, bricks3, ladders3));
};

main()