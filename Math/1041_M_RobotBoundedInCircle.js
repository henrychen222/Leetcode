/**
 * 07/10/21 afternoon
 * https://leetcode.com/problems/robot-bounded-in-circle/
 */

// Accepted --- 84ms 36.64%
const isRobotBounded = (s) => {
    let nn = s.length;
    let x = y = 0;
    s = s.repeat(4);
    // pr(s);
    let dir = 'N';
    let len = 0;
    for (const c of s) {
        if (c == 'G') {
            if (dir == 'N') {
                y++;
            } else if (dir == 'W') {
                x--;
            } else if (dir == 'S') {
                y--;
            } else if (dir == 'E') {
                x++;
            }
        } else {
            dir = turn(dir, c);
        }
        // pr(c, x, y, dir);
        len++;
        if (len % nn == 0 && x == 0 && y == 0) return true;
    }
    return false;
};

const turn = (curDir, lr) => {
    let res = '';
    if (curDir == 'N') {
        res = (lr == 'L' ? 'W' : 'E');
    } else if (curDir == 'W') {
        res = (lr == 'L' ? 'S' : 'N');
    } else if (curDir == 'S') {
        res = (lr == 'L' ? 'E' : 'W');
    } else if (curDir == 'E') {
        res = (lr == 'L' ? 'N' : 'S');
    }
    return res;
};

const pr = console.log;
const main = () => {
    let instructions = "GGLLGG";
    let instructions2 = "GG";
    let instructions3 = "GL";
    let debug1 = "GLGLGGLGL";
    pr(isRobotBounded(instructions));
    pr(isRobotBounded(instructions2));
    pr(isRobotBounded(instructions3));
    pr(isRobotBounded(debug1)); // false
};

main()