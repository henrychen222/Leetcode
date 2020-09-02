/**
 * 9.1 morning
 * https://leetcode.com/problems/asteroid-collision/
 */

// need to fix 265/275
let stack = [];
const asteroidCollision = (asteroids) => {
    stack = [];
    for (const a of asteroids) {
        if (stack.length == 0) {
            stack.push(a);
        } else {
            let peek = stack[stack.length - 1];
            if (a < 0 && peek > 0) {
                operate(a, peek);
            } else {
                stack.push(a);
            }
        }
        console.log(stack);
    }
    return stack;
};

const operate = (a, b) => {
    let aSize = Math.abs(a);
    let bSize = Math.abs(b);
    if (aSize == bSize) {
        stack.pop();
    } else {
        stack.pop();
        let tmp = aSize > bSize ? a : b;
        stack.push(tmp);
        while (tmp < 0 && stack[stack.length - 2] > 0) {
            operate2(tmp, stack[stack.length - 2]);
        }
    }
};

const operate2 = (a, b) => {
    let aSize = Math.abs(a);
    let bSize = Math.abs(b);
    if (aSize == bSize) {
        stack.pop();
        stack.pop();
    } else {
        stack.pop();
        stack.pop();
        let tmp = aSize > bSize ? a : b;
        stack.push(tmp);
    }
};

const main = () => {
    let asteroids = [5, 10, -5];
    let asteroids2 = [8, -8];
    let asteroids3 = [10, 2, -5];
    let asteroids4 = [-2, -1, 1, 2];
    let debug1 = [3,-69,-65,67,-76,34,10,96,55,77,85,56,99,-1,6,-37,-7,-70,75,-60,4,-73,35,-32,3,-7,72,83,-82,70,68,63,33,-68,-100,61,-96,27,89,81,-11,-63,69,49,-34,23,87,23,26,-67,67,-100,-84,-89,-76,-42,-86,-96,86,7,25,9,-17,7,-15,-35,-65,-82,-32,90,-27,39,30,-42,-3,-71,-46,24,20,-84,8,51,-84,24,53,66,87,-64,27,-5,-68,86,-49,-53,68,21,-88,58,21,-18];
    // console.log(asteroidCollision(asteroids));
    // console.log(asteroidCollision(asteroids2));
    // console.log(asteroidCollision(asteroids3));
    // console.log(asteroidCollision(asteroids4));
    console.log(asteroidCollision(debug1));
};

main()