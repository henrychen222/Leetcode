/**
 * 5.3 evening
 * https://leetcode.com/problems/two-city-scheduling/
 */

/**
 * http://www.noteanddata.com/leetcode-1029-Two-City-Scheduling-java-solution-note.html
 * Accepted --- 
 */
const twoCitySchedCost_noteanddata = (costs) => {
    costs.sort((a, b) => {
        return a[1] - a[0] - (b[1] - b[0]);
    });
    console.log(costs)
    let sum = 0;
    for (const cost of costs) { //假设所有的人都选择城市A， 这时候sum=sum{a[i][0]}
        sum += cost[0];
    }

    //一半的人改成B, 选择某一个人对sum的影响是d=a[i][1]-a[i][0]
    for (let i = 0; i < costs.length / 2; i++) { // 要让结果最小, 就需要让这个d最小, 对d排序. 然后选择最小的一半就好
        let diff = costs[i][1] - costs[i][0];
        sum += diff;
    }
    return sum;
};

const twoCitySchedCost = (costs) => {
    let sum = 0;
    for (let i = 0; i < costs.length; i++) {
        sum += Math.min(costs[i][0], costs[i][1])
    }
    return sum;
};

const main = () => {
    let costs = [
        [10, 20],
        [30, 200],
        [400, 50],
        [30, 20]
    ];
    console.log(twoCitySchedCost(costs));

    let debug1 = [
        [259, 770],
        [448, 54],
        [926, 667],
        [184, 139],
        [840, 118],
        [577, 469]
    ];
    console.log(twoCitySchedCost(debug1));

    console.log(twoCitySchedCost_noteanddata(costs));  // 110
    console.log(twoCitySchedCost_noteanddata(debug1)); // 1859

};

main()