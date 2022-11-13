/**
 * 10/13/12 morning
 * https://leetcode.com/contest/biweekly-contest-65/problems/walking-robot-simulation-ii/
 */

const pr = console.log;

function Robot(row, col) {
    let round = 2 * (row + col) - 4;
    pr("round", round);
    let d = 'E', x = 0, y = 0;
    return { move, getPos, getDir }
    function move(step) {
        step %= round;
        pr(step)
        // solve this issue from here https://leetcode.com/problems/walking-robot-simulation-ii/discuss/1575896/Hidden-Test-Case-REVEALED!
        if(first && step == 0){ // get stuck in hidden case 140, start (0, 0) face East, round > 1 to (0, 0) to face "South"
            if(x == 0 && y == 0) d = 'S';
            first = false;
            return;
        }
        while (step--) {
            if (d == 'E') {
                if (x + 1 < row) {
                    x++;
                } else {
                    y++;
                    turn();
                }
            } else if (d == 'N') {
                if (y + 1 < col) {
                    y++;
                } else {
                    x--;
                    turn();
                }
            } else if (d == 'W') {
                if (x - 1 >= 0) {
                    x--;
                } else {
                    y--;
                    turn();
                }
            } else if (d == 'S') {
                if (y - 1 >= 0) {
                    y--
                } else {
                    x++;
                    turn();
                }
            }
        }
    }
    function getPos() {
        return [x, y];
    }
    function getDir() {
        if (d == 'E') {
            return 'East';
        } else if (d == 'N') {
            return 'North';
        } else if (d == 'W') {
            return 'West';
        } else if (d == 'S') {
            return 'South';
        }
    }
    function turn() {
        if (d == 'E') {
            d = 'N';
        } else if (d == 'N') {
            d = 'W';
        } else if (d == 'W') {
            d = 'S';
        } else if (d == 'S') {
            d = 'E';
        }
    }
}

const main = () => {
    let robot = new Robot(6, 3);
    robot.move(2);
    robot.move(2);
    pr(robot.getPos()); // [4, 0]
    pr(robot.getDir()); // "East"
    robot.move(2);
    robot.move(1);
    robot.move(4);
    pr(robot.getPos()); // [1, 2]
    pr(robot.getDir()); // "West"
};

main()

/*
["Robot","move","move","getPos","getDir","move","getPos","getDir","getPos","getDir"]
[[20,13],[12],[21],[],[],[17],[],[],[],[]]

[null,null,null,[17,12],"West",null,[0,12],"West",[0,12],"West"]

[12, 0] E
[19, 0] N   move 7  rest 21 - 7 = 14


----- Test
["Robot","move","move","getPos","getDir","move","getPos","getDir","getPos","getDir"]
[[3,2],[1],[1],[],[],[1],[],[],[],[]]
*/






// if (d == 'E') {
//     if (x + step <= row) {
//         x += step;
//     } else {
//         let rest = step - (row - x);
//         x = row;
//         turn();
//         y += rest;
//     }
// } else if (d == 'N') {
//     if (y + step <= col) {
//         y += step;
//     } else {
//         let rest = step - (col - y);
//         y = col;
//         turn();
//         x -= rest;
//     }
// } else if (d == 'W') {
//     if (x - step >= 0) {
//         x -= step;
//     } else {
//         let rest = step - (x - 0);
//         x = 0;
//         turn();
//         y -= rest;
//     }
// } else if (d == 'S') {
//     if (y - step >= 0) {
//         y -= step;
//     } else {
//         let rest = step - (y - 0);
//         y = 0;
//         turn();
//         x += rest;
//     }
// }