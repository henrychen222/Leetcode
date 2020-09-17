/**
 * 9.16 evening
 * https://leetcode.com/problems/delete-columns-to-make-sorted-ii/
 */

// don't know
const minDeletionSize = (A) => {
    if(islexicographic(A)) return 0;
};

const islexicographic = (arr) => {
    let n = arr.length;
    let tmp = arr.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < n; i++) {
        if (arr[i] != tmp[i]) {
            return false;
        }
    }
    return true;
};

const main = () => {
    let A = ["ca", "bb", "ac"];
    let A2 = ["xc", "yb", "za"];
    let A3 = ["zyx", "wvu", "tsr"];
};

main()