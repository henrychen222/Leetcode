/**
 * 12.31 night
 * https://leetcode.com/problems/brace-expansion-ii/
 */

// Accepted --- 96 ms 40.4 MB  42.86%
const braceExpansionII = (expression) => {
    const stack = [];
    let index = 0;
    let set = new Set();

    const union = (s1 = new Set(), s2 = new Set()) => {
        return new Set([...s1, ...s2]);
    };

    const concat = (s1 = new Set(), s2 = new Set()) => {
        if (s1.size === 0 && s2.size === 0) return new Set();
        else if (s1.size === 0) return s2;
        else if (s2.size === 0) return s1;

        const l1 = [...s1],
            l2 = [...s2];
        const list = [];
        for (let i = 0; i < l1.length; i++) {
            for (let j = 0; j < l2.length; j++) {
                list.push(`${l1[i]}${l2[j]}`);
            }
        }
        return new Set(list);
    };

    const isCharacter = (c) => {
        return !(c === ',' || c === '{' || c === '}');
    };

    while (index < expression.length) {

        const ch = expression[index];

        if (ch === '}') { // if it's closing bracket

            let op = 1; // 0: union, 1: concat
            set = new Set();

            // resolve logics within brackets {}
            while (stack[stack.length - 1] !== '{') {
                const top = stack.pop();
                if (top === ',') {
                    op = 0;
                } else {
                    set = op === 0 ? union(top, set) : concat(top, set);
                    op = 1;
                }
            }

            // pop the opening bracket
            stack.pop();

            // resolve previous connected characters until reaching to non-character
            while (stack.length > 0 && isCharacter(stack[stack.length - 1])) {
                set = concat(stack.pop(), set);
            }

            // push to stack for the merged set
            stack.push(set);

        } else if (!isCharacter(ch)) { // if it's not a closing bracket and not a charater

            stack.push(ch);

        } else { // character

            const character = new Set([ch]);

            // merge characters if adjacent, otherwise just push as a set
            stack.push(isCharacter(stack[stack.length - 1]) ? concat(stack.pop(), character) : character);

        }

        index++;
    }

    // if stack is not empty, concat the rest
    set = new Set();
    while (stack.length) set = concat(stack.pop(), set);

    // sorted order
    return [...set].sort((a, b) => a.localeCompare(b));
}

const main = () => {
    const expression1 = "{a,b}{c,{d,e}}";
    const expression2 = "{{a,z},a{b,c},{ab,z}}";
    console.log(braceExpansionII(expression1)); // ["ac","ad","ae","bc","bd","be"]
    console.log(braceExpansionII(expression2)); // ["a","ab","ac","z"]
}

main();