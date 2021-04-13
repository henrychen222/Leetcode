/**
 * 04/12/21 morning
 * https://leetcode.com/problems/design-twitter/
 */

const pr = console.log;

// Accepted --- 112ms 46.43%
function NestedIterator(nestedList) {
    // pr(nestedList);
    // pr(nestedList[0], nestedList[0].getList()[0], nestedList[0].isInteger());
    // pr(nestedList[1], nestedList[1].isInteger(), typeof nestedList[1], typeof nestedList[1].getInteger());
    let d = [];
    for (const e of nestedList) {
        if (e.isInteger()) {
            d.push(e.getInteger());
        } else {
            dfs(e);
        }
    }
    pr("d", d, d[0])
    return {
        hasNext,
        next
    }

    function dfs(input) {
        if (input.isInteger()) return d.push(input.getInteger());
        let list = input.getList();
        for (const e of list) {
            dfs(e);
        }
    }

    function hasNext() {
        return d.length > 0;
    }

    function next() {
        return d.shift();
    }
};

const main = () => {
    let nestedList = [
        [1, 1], 2, [1, 1]
    ];
    test(nestedList);
};

const test = (nestedList) => {
    let i = new NestedIterator(nestedList);
    let a = [];
    while (i.hasNext()) a.push(i.next());
};

main()


// let num = 1;
// let a = [1, 2];
// let a2 = [];
// pr(num, num.length, a.length, a2.length);