/**
 * 5.7 afternoon  5.8 night
 * https://leetcode.com/problems/walking-robot-simulation/
 */

/**
 * https://blog.csdn.net/androidchanhao/article/details/81269418
 * Accepted --- 112ms 49.9 MB 90.91%
 */
const robotSim_csdn = (commands, obstacles) => {
    let oSet = new Set();
    for (const obstacle of obstacles) {
        oSet.add(obstacle[0] + "," + obstacle[1]);
    }
    let dir = 0,
        x = 0,
        y = 0,
        res = 0;
    let dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    for (let command of commands) {
        if (command == -1) { //向右转，即顺时针转换方向
            dir = (dir + 1) % 4;
        } else if (command == -2) { // 向左转，逆时针转换方向
            dir = (dir - 1 + 4) % 4
        } else { //没遇到障碍物前往前走
            // const value = Array.from(oSet)[(x + dirs[dir][0]) + "," + (y + dirs[dir][1])];
            // while (command-- > 0 && value == oSet[oSet.size - 1]) {
            while (command-- > 0 && !oSet.has(x + dirs[dir][0] + "," + (y + dirs[dir][1]))) {
                x += dirs[dir][0];
                y += dirs[dir][1];
            }
        }
        res = Math.max(res, x * x + y * y); //检查能否更新最大值
    }
    return res;
};

/**
 * https://www.cnblogs.com/grandyang/p/10800993.html
 * Accepted --- 108ms 49.9 MB 92.42%
 */
const robotSim_cnblog = (commands, obstacles) => {
    let oSet = new Set();
    for (const obstacle of obstacles) {
        oSet.add(obstacle[0] + "-" + obstacle[1]); // 对二维坐标压缩成了字符串
    }
    let res = 0,
        x = 0,
        y = 0,
        idx = 0;
    let dirX = [0, 1, 0, -1];
    let dirY = [1, 0, -1, 0];
    for (let command of commands) {
        if (command == -1) { //向右转，即顺时针转换方向
            idx = (idx + 1) % 4;
        } else if (command == -2) { // 向左转，逆时针转换方向
            idx = (idx - 1 + 4) % 4;
        } else { //没遇到障碍物前往前走
            while (command-- > 0 && !oSet.has(x + dirX[idx] + "-" + (y + dirY[idx]))) {
                x += dirX[idx];
                y += dirY[idx];
            }
        }
        res = Math.max(res, x * x + y * y);
    }
    return res;
};

const main = () => {
    let commands = [4, -1, 3],
        obstacles = [];
    let commands2 = [4, -1, 4, -2, 4],
        obstacles2 = [
            [2, 4]
        ];
    console.log(robotSim_csdn(commands, obstacles));
    console.log(robotSim_csdn(commands2, obstacles2));

    console.log("");
    console.log(robotSim_cnblog(commands, obstacles)); // 25
    console.log(robotSim_cnblog(commands2, obstacles2)); // 65
};

main()