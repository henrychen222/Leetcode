/**
 * 6.27 night
 * https://leetcode.com/contest/weekly-contest-195/problems/path-crossing/
 */

// understand question wrong, think have to pass [0, 0] return true. actually any point revisited
// Accepted
const isPathCrossing = (path) => {
    let data = [[0, 0]];
    let start = [0, 0];
    for (const c of path) {
        if (c == 'N') {
            start[1]++;
        } else if (c == 'S') {
            start[1]--;
        } else if (c == 'E') {
            start[0]++;
        } else {
            start[0]--;
        }
        data.push([...start]);
    }
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            let x1 = data[i][0];
            let y1 = data[i][1];
            let x2 = data[j][0];
            let y2 = data[j][1];
            if ((x1 == x2) && (y1 == y2)) {
                return true;
            }
        }
    }
    return false;
};

const main = () => {
    let path = "NES";
    let path2 = "NESWW";
    let debug1 = "NNSWWEWSSESSWENNW";
    let debug2 = "SS";
    let debug3 = "SN"
    console.log(isPathCrossing(path)); // false
    console.log(isPathCrossing(path2)); // true
    console.log(isPathCrossing(debug1)); // true
    console.log(isPathCrossing(debug2)); // false
    console.log(isPathCrossing(debug3)); // true
};

main()