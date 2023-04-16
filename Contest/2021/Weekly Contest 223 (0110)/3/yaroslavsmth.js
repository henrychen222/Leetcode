// 1.11 noon
// https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/discuss/1010851/JS-Simple-Union-Find-Solution

class UnionSet {
    nodes = []
    constructor(n) {
        for (let i = 0; i < n; i++) {
            this.nodes.push(i)
        }
    }

    union(i, j) {
        const nodesI = this.nodes[i]
        const nodesJ = this.nodes[j]
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i] === nodesJ) {
                this.nodes[i] = nodesI
            }
        }
    }

    find(i, j) {
        return this.nodes[i] === this.nodes[j]
    }
}

// Accepted --- 8088ms
const minimumHammingDistance_origin = (source, target, allowedSwaps) => {
    let d = 0;
    const unionSet = new UnionSet(source.length)
    for (const swap of allowedSwaps) {
        unionSet.union(swap[0], swap[1]);
    }
    const index = {}
    for (let i in source) {
        index[source[i]] = index[source[i]] || [];
        index[source[i]].push(i);
    }
    // console.log(index);
    for (let i = 0; i < source.length; i++) {
        let indexes = index[target[i]] || [];
        // console.log(indexes);
        let found = false;
        let foundIndex = 0;
        for (let targetIndex of indexes) {
            if (unionSet.find(i, targetIndex)) {
                foundIndex = targetIndex;
                found = true;
                break;
            }
        }
        if (found) {
            // console.log(index, index[target[i]].filter(i => i !== foundIndex));
            index[target[i]] = index[target[i]].filter(i => i !== foundIndex)
        }
        if (!found) {
            d++;
        }
    }
    return d;
};

// Accepted --- 7736ms
const minimumHammingDistance = (source, target, allowedSwaps) => {
    let d = 0;
    let n = source.length;
    const unionSet = new UnionSet(n)
    for (const swap of allowedSwaps) {
        unionSet.union(swap[0], swap[1]);
    }
    const index = new Map();
    for (let i = 0; i < n; i++) {
        index.set(source[i], index.get(source[i]) || []);
        index.get(source[i]).push(i);
    }
    // console.log(index);
    for (let i = 0; i < n; i++) {
        let indexes = index.get(target[i]) || [];
        // console.log(indexes);
        let found = false;
        let foundIndex = 0;
        for (let targetIndex of indexes) {
            if (unionSet.find(i, targetIndex)) {
                foundIndex = targetIndex;
                found = true;
                break;
            }
        }
        if (found) {
            // console.log(index, index.get(target[i]).filter(i => i !== foundIndex))
            index.set(target[i], index.get(target[i]).filter(i => i !== foundIndex));
        }
        if (!found) {
            d++;
        }
    }
    return d;
};

// Accepted --- 6664ms
const minimumHammingDistance2 = (source, target, allowedSwaps) => {
    let d = 0;
    let n = source.length;
    const unionSet = new UnionSet(n)
    for (const swap of allowedSwaps) {
        unionSet.union(swap[0], swap[1]);
    }
    const index = new Map();
    for (let i = 0; i < n; i++) {
        if (!index.has(source[i])) {
            index.set(source[i], []);
        }
        index.get(source[i]).push(i);
    }
    for (let i = 0; i < n; i++) {
        let indexes = index.get(target[i]) || [];
        let found = false;
        let foundIndex = 0;
        for (let targetIndex of indexes) {
            if (unionSet.find(i, targetIndex)) {
                foundIndex = targetIndex;
                found = true;
                break;
            }
        }
        if (found) {
            index.set(target[i], index.get(target[i]).filter(i => i !== foundIndex));
        }
        if (!found) {
            d++;
        }
    }
    return d;
};

// Accepted --- 7636ms
const minimumHammingDistance3 = (source, target, allowedSwaps) => {
    let d = 0;
    let n = source.length;
    const unionSet = new UnionSet(n)
    for (const swap of allowedSwaps) {
        unionSet.union(swap[0], swap[1]);
    }
    const index = new Map();
    for (let i = 0; i < n; i++) {
        if (!index.has(source[i])) {
            index.set(source[i], []);
        }
        index.get(source[i]).push(i);
    }
    for (let i = 0; i < n; i++) {
        let indexes = index.get(target[i]) || [];
        let found = false;
        let foundIndex = 0;
        for (let targetIndex of indexes) {
            if (unionSet.find(i, targetIndex)) {
                foundIndex = targetIndex;
                found = true;
                break;
            }
        }
        // found ? index.set(target[i], index.get(target[i]).filter(i => i !== foundIndex)): d++; // Accepted --- 8852ms
        if (found) {
            index.set(target[i], index.get(target[i]).filter(i => i !== foundIndex));
        } else {
            d++;
        }
    }
    return d;
};

const main = () => {
    let source = [1, 2, 3, 4], target = [2, 1, 4, 5], allowedSwaps = [[0, 1], [2, 3]];
    let source2 = [1, 2, 3, 4], target2 = [1, 3, 2, 4], allowedSwaps2 = [];
    let source3 = [5, 1, 2, 4, 3], target3 = [1, 5, 4, 2, 3], allowedSwaps3 = [[0, 4], [4, 2], [1, 3], [1, 4]];
    console.log(minimumHammingDistance(source, target, allowedSwaps));
    console.log(minimumHammingDistance(source2, target2, allowedSwaps2));
    console.log(minimumHammingDistance(source3, target3, allowedSwaps3));
};

main()