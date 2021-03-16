// 02/09/21 evening

const arrayEqual = (a, b) => {
    return JSON.stringify(a) == JSON.stringify(b);
};

// improved speed
const isSubArray = (child, parent) => {
    let cn = child.length;
    let pn = parent.length;
    for (let i = 0; i < pn; i++) {
        if (child[0] != parent[i] || (i + cn - 1) >= pn) continue;
        let tmp = parent.slice(i, i + cn);
        if (arrayEqual(tmp, child)) return true;
    }
    return false;
};

const isSubArray_first = (child, parent) => {
    let cn = child.length;
    let pn = parent.length;
    for (let i = 0; i < pn; i++) {
        let tmp = parent.slice(i, i + cn);
        if (arrayEqual(tmp, child)) return true;
    }
    return false;
};

// 03/14/21 evening from arc114 D, use: sort only first kth elements
const sortPart = (a, k) => {
    let l = a.slice(0, k);
    // l.sort();    
    l.sort((x, y) => x - y);
    let r = a.slice(k);
    return l.concat(r);
};

console.log(arrayEqual([1, 2, 3], [1, 2, 3])); // true
console.log(arrayEqual([1, 2, 3], [1, 2, 4])); // false
console.log(arrayEqual(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 3]))); // true
console.log(arrayEqual(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 4]))); // false

console.log(isSubArray([4, 2, 8], [1, 4, 2, 6])); // false
console.log(isSubArray([4, 2, 8], [1, 4, 2, 8, 1])); // true;
// console.log(isSubArray([], [ 1 ])); // ?
// console.log(isSubArray([], [])); // ?