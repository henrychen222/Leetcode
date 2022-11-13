/**
 * 04/10/21 evening
 * https://leetcode.com/contest/weekly-contest-236/problems/finding-mk-average/
 */


// TLE 30/31
function MKAverage(m, k) {
    let data = [];
    return { addElement, calculateMKAverage }
    function addElement(num) {
        data.push(num);
        // console.log("data", data);
    }

    function calculateMKAverage() {
        let a = [...data];
        let n = a.length;
        if (n < m) return -1;
        a = a.slice(n - m);
        // console.log("last m elements", a);
        a.sort((x, y) => x - y);
        // console.log(a);
        let nn = a.length;
        a = a.slice(k, nn - k);
        // console.log("sorted", a, k);
        let nnn = a.length;
        let sum = 0;
        if (nnn > 0) {
            sum = a.reduce((x, y) => x + y);
        }
        // console.log(sum, nnn, sum / nnn);
        return sum / nnn >> 0;
    }
}

// WA 9/31
function MKAverage(m, k) {
    let a = [];
    return { addElement, calculateMKAverage }
    function addElement(num) {
        a.push(num);
    }

    function calculateMKAverage() {
        a.sort((x, y) => x - y);
        // console.log(a);
        let n = a.length;
        if (n < m) return -1;
        a = a.slice(k, n - k);
        // console.log(a);
        let nn = a.length;
        let sum = 0;
        if (nn > 0) {
            sum = a.reduce((x, y) => x + y);
        }
        // console.log(sum, nn);
        return sum / nn >> 0;
    }
}

/**
["MKAverage","addElement","addElement","addElement","addElement","addElement","addElement","calculateMKAverage"]
[[6,1],[3],[1],[12],[5],[3],[4],[]]
[null,null,null,null,null,null,null,3]

["MKAverage","addElement","addElement","calculateMKAverage","addElement","addElement","calculateMKAverage","addElement","addElement","calculateMKAverage","addElement"]
[[3,1],[17612],[74607],[],[8272],[33433],[],[15456],[64938],[],[99741]]
[null,null,null,-1,null,null,33433,null,null,33433,null]
 */