/**
 * 9.18 evening
 * https://leetcode.com/problems/gas-station/
 */

// Accepted --- 108ms 39.23%
const canCompleteCircuit2 = (gas, cost) => {
    let n = gas.length;
    for (let i = 0; i < n; i++) {
        if (gas[i] >= cost[i]) {
            let tank = gas[i];
            if (i == n - 1) {
                for (let j = 0; j < n; j++) {
                    if (j == 0) {
                        if (tank < cost[n - 1]) break;
                        tank -= cost[n - 1];
                        tank += gas[j];
                    } else {
                        if (tank < cost[j - 1]) break;
                        tank -= cost[j - 1];
                        tank += gas[j];
                    }
                    if (j == i) return j;
                }
            } else {
                for (let j = i + 1; j < n; j++) {
                    if (j == 0) {
                        if (tank < cost[n - 1]) break;
                        tank -= cost[n - 1];
                        tank += gas[j];
                    } else {
                        if (tank < cost[j - 1]) break;
                        tank -= cost[j - 1];
                        tank += gas[j];
                        if (j == n - 1) j = -1;
                    }
                    if (j == i) return j;
                }
            }
        }
    }
    return -1;
};

// Accepted --- 116ms 33.85%
const canCompleteCircuit = (gas, cost) => {
    let n = gas.length;
    for (let i = 0; i < n; i++) {
        if (gas[i] >= cost[i]) {
            let tank = gas[i];
            // console.log('\n' + i);
            if (i == n - 1) {
                for (let j = 0; j < n; j++) {
                    if (j == 0) {
                        // console.log(j, tank, cost[n - 1], gas[j], tank - cost[n - 1] + gas[j]);
                        if (tank < cost[n - 1]) break;
                        tank -= cost[n - 1];
                        tank += gas[j];
                    } else {
                        // console.log(j, tank, cost[n - 1], gas[j], tank - cost[n - 1] + gas[j]);
                        if (tank < cost[j - 1]) break;
                        tank -= cost[j - 1];
                        tank += gas[j];
                    }
                    if (j == i) return j;
                }
                continue;
            }
            for (let j = i + 1; j < n; j++) {
                if (j == 0) {
                    // console.log(j, tank, cost[n - 1], gas[j], tank - cost[n - 1] + gas[j]);
                    if (tank < cost[n - 1]) break;
                    tank -= cost[n - 1];
                    tank += gas[j];
                } else {
                    // console.log(j, tank, cost[j - 1], gas[j], tank - cost[j - 1] + gas[j]);
                    if (tank < cost[j - 1]) break;
                    tank -= cost[j - 1];
                    tank += gas[j];
                    if (j == n - 1) j = -1; // here is -1, because j will ++, so pointer j to 0
                }
                if (j == i) return j;
            }
        }
    }
    return -1;
};

const main = () => {
    let gas = [1, 2, 3, 4, 5],
        cost = [3, 4, 5, 1, 2];
    let gas2 = [2, 3, 4],
        cost2 = [3, 4, 3];
    let gas_debug1 = [3, 3, 4],
        cost_debug1 = [3, 4, 4];
    let gas_debug2 = [5, 1, 2, 3, 4],
        cost_debug2 = [4, 4, 1, 5, 1];
    let gas_debug3 = [4, 5, 2, 6, 5, 3],
        cost_debug3 = [3, 2, 7, 3, 2, 9];
    console.log(canCompleteCircuit(gas, cost)); // 3
    console.log(canCompleteCircuit(gas2, cost2)); // -1
    console.log(canCompleteCircuit(gas_debug1, cost_debug1)); // -1
    console.log(canCompleteCircuit(gas_debug2, cost_debug2)); // 4
    console.log(canCompleteCircuit(gas_debug3, cost_debug3)); // -1

    console.log("")
    console.log(canCompleteCircuit2(gas, cost));
    console.log(canCompleteCircuit2(gas2, cost2));
    console.log(canCompleteCircuit2(gas_debug1, cost_debug1));
    console.log(canCompleteCircuit2(gas_debug2, cost_debug2));
    console.log(canCompleteCircuit2(gas_debug3, cost_debug3));
};

main()


// else if (j == n - 1) {
//     console.log(j, tank, cost[j - 1], gas[j], tank - cost[j - 1] + gas[j]);
//     if (tank < cost[j - 1]) break;
//     tank -= cost[j - 1];
//     tank += gas[j];
//     j = 0;
// } 