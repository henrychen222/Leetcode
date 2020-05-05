/**
 * 5.4 night
 * https://leetcode.com/problems/delete-columns-to-make-sorted/
 */

/**
 * https://zxi.mytechroad.com/blog/simulation/leetcode-944-delete-columns-to-make-sorted/
 * https://kagayablog.com/leetcode-problem944-delete-columns-to-make-sorted/
 * http://www.programmersought.com/article/6703496854/
 * 
 * Accepted --- 72ms 39.7 MB 75.73%
 */
const minDeletionSize_huahua = (A) => {
    let result = 0;
    for (let i = 0; i < A[0].length; i++) {
        for (let j = 1; j < A.length; j++) {
            if (A[j][i] < A[j - 1][i]) {
                result++;
                break;
            }
        }
    }
    return result;
};

/**
 * https://zhanghuimeng.github.io/post/leetcode-944-delete-columns-to-make-sorted/
 * Accepted --- 72ms 39.5 MB 75.73%
 * 把不是非降序的列全都删掉就好
 */
const minDeletionSize_zhanghuimeng = (A) => {
    let result = 0;
    for (let i = 0; i < A[0].length; i++) {
        let increase = true;
        for (let j = 1; j < A.length; j++) {
            if (A[j][i] < A[j - 1][i]) {
                increase = false
                break;
            }
        }
        if (!increase) {
            result++;
        }
    }
    return result;
};

/**
 * https://blog.csdn.net/fuxuemingzhu/article/details/84206638
 * Accepted --- 256ms 43.3 MB 7.77%
 * 
 * 直接对所有的列进行遍历. 判断这个列是不是递增的, 如果不是递增的话，就删除掉(result++)。统计要删除掉多少个列(result)
 */
const minDeletionSize_csdn = (A) => {
    let result = 0;
    for (let i = 0; i < A[0].length; i++) {
        let col = "";
        for (const j of A) {
            col += j[i];
        }
        if (col !== sortString(col)) { //判断某个列是不是递增: 排序之后，然后看是不是和之前的相等
            result++;
        }
    }
    return result;
};

const sortString = (str) => {
    return str.split('').sort().join('');
};

// const minDeletionSize = (A) => {
//     let d = 0;
//     for (let i = 0; i < A.length; i++) {
//         for (let j = 0; j < A[i].length; j++) {
//             let arr = A[i].replace(A[j], "");
//             console.log(arr);
//             d++;
//         }
//     }
// };

const main = () => {
    let A = ["cba", "daf", "ghi"];
    let A2 = ["a", "b"];
    let A3 = ["zyx", "wvu", "tsr"];

    // console.log(minDeletionSize(A));
    // console.log(minDeletionSize(A2))
    // console.log(minDeletionSize(A3))

    console.log(minDeletionSize_huahua(A)); //1
    console.log(minDeletionSize_huahua(A2)); //0
    console.log(minDeletionSize_huahua(A3)); //3

    console.log("");
    console.log(minDeletionSize_huahua(A));
    console.log(minDeletionSize_huahua(A2));
    console.log(minDeletionSize_huahua(A3));

    console.log("");
    console.log(minDeletionSize_csdn(A));
    console.log(minDeletionSize_csdn(A2));
    console.log(minDeletionSize_csdn(A3));


};

main()