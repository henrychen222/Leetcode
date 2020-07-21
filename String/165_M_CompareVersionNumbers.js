/**
 * 7.20 night
 * https://leetcode.com/problems/compare-version-numbers/
 */

// Accepted --- 92ms 36.8MB 13.16%
const compareVersion = (version1, version2) => {
    let v1 = version1.split(".").map(x => Number(x));
    let v2 = version2.split(".").map(x => Number(x));
    // console.log(v1, v2);
    let v1Len = v1.length;
    let v2Len = v2.length;
    if (v1Len <= v2Len) {
        for (let i = 1; i <= v2Len - v1Len; i++) {
            v1.push(0);
        }
    } else {
        for (let i = 1; i <= v1Len - v2Len; i++) {
            v2.push(0);
        }
    }
    // console.log(v1, v2);
    if (compare(v1, v2) == '>') {
        return 1;
    } else if (compare(v1, v2) == '<') {
        return -1;
    } else {
        return 0;
    }
};

const compare = (v1, v2) => {
    let n = v1.length;
    for (let i = 0; i < n; i++) {
        if (v1[i] != v2[i]) {
            if (v1[i] > v2[i]) {
                return '>';
            } else if (v1[i] < v2[i]) {
                return '<';
            }
        }
    }
    return '=';
};

// Accepted --- 100ms 36.2MB 9.81%
const compareVersion2 = (version1, version2) => {
    let v1 = version1.split(".").map(x => Number(x));
    let v2 = version2.split(".").map(x => Number(x));
    let v1Len = v1.length;
    let v2Len = v2.length;
    if (v1Len < v2Len) {
        for (let i = 1; i <= v2Len - v1Len; i++) {
            v1.push(0);
        }
    } else if (v1Len > v2Len) {
        for (let i = 1; i <= v1Len - v2Len; i++) {
            v2.push(0);
        }
    }
    if (compare(v1, v2) == '>') {
        return 1;
    } else if (compare(v1, v2) == '<') {
        return -1;
    } else {
        return 0;
    }
};


// Accepted --- 76ms 36.4MB 33.01%
const compareVersion_refine = (version1, version2) => {
    let v1 = version1.split(".").map(x => Number(x));
    let v2 = version2.split(".").map(x => Number(x));
    let v1Len = v1.length;
    let v2Len = v2.length;
    if (v1Len <= v2Len) {
        for (let i = 1; i <= v2Len - v1Len; i++) {
            v1.push(0);
        }
    } else {
        for (let i = 1; i <= v1Len - v2Len; i++) {
            v2.push(0);
        }
    }
    return compare2(v1, v2);
};

const compare2 = (v1, v2) => {
    let n = v1.length;
    for (let i = 0; i < n; i++) {
        if (v1[i] != v2[i]) {
            if (v1[i] > v2[i]) {
                return 1;
            } else if (v1[i] < v2[i]) {
                return -1;
            }
        }
    }
    return 0;
};

const main = () => {
    let version1 = "0.1",
        version2 = "1.1";
    let version1_2 = "1.0.1",
        version2_2 = "1";
    let version1_3 = "7.5.2.4",
        version2_3 = "7.5.3";
    let version1_4 = "1.01",
        version2_4 = "1.001";
    let version1_5 = "1.0",
        version2_5 = "1.0.0";
    console.log(compareVersion(version1, version2));
    console.log(compareVersion(version1_2, version2_2));
    console.log(compareVersion(version1_3, version2_3));
    console.log(compareVersion(version1_4, version2_4));
    console.log(compareVersion(version1_5, version2_5));

    console.log("");
    console.log(compareVersion2(version1, version2));
    console.log(compareVersion2(version1_2, version2_2));
    console.log(compareVersion2(version1_3, version2_3));
    console.log(compareVersion2(version1_4, version2_4));
    console.log(compareVersion2(version1_5, version2_5));

    console.log("");
    console.log(compareVersion_refine(version1, version2));
    console.log(compareVersion_refine(version1_2, version2_2));
    console.log(compareVersion_refine(version1_3, version2_3));
    console.log(compareVersion_refine(version1_4, version2_4));
    console.log(compareVersion_refine(version1_5, version2_5));
};

main()