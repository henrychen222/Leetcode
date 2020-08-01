/**
 * 7.31 night
 * https://leetcode.com/problems/replace-words/
 */

// Accepted --- 308ms 43.3MB 34.21%
const replaceWords = (dict, sentence) => {
    let sArr = sentence.split(" ");
    let data = [];
    for (const successor of sArr) {
        let tmp = dict.filter(root => successor.indexOf(root) == 0);
        data.push([successor, tmp]);
    }
    // console.log(data);
    let res = [];
    for (const d of data) {
        let arr = d[1];
        if (arr.length == 0) {
            res.push(d[0]);
        } else {
            arr.sort((a, b) => {
                if (a.length == b.length) return d[0].indexOf(a) - d[0].indexOf(b);
                return a.length - b.length;
            });
            res.push(arr[0]);
        }
    }
    return res.join(" ");
};

// Accepted --- 488ms 41.4MB 18.42%
const replaceWords_refine = (dict, sentence) => {
    let sArr = sentence.split(" ");
    let res = [];
    for (const successor of sArr) {
        let tmp = dict.filter(root => successor.indexOf(root) == 0);
        if (tmp.length == 0) {
            res.push(successor);
        } else {
            tmp.sort((a, b) => {
                if (a.length == b.length) return successor.indexOf(a) - successor.indexOf(b);
                return a.length - b.length;
            });
            res.push(tmp[0]);
        }
    }
    return res.join(" ");
};

const main = () => {
    let dict = ["cat", "bat", "rat"],
        sentence = "the cattle was rattled by the battery";
    let dict_debug1 = ["a", "b", "c"],
        sentence_debug1 = "aadsfasf absbs bbab cadsfafs";
    let dict_debug2 = ["a", "aa", "aaa", "aaaa"],
        sentence_debug2 = "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa";
    console.log(replaceWords(dict, sentence)); // the cat was rat by the bat
    console.log(replaceWords(dict_debug1, sentence_debug1)); // a a b c
    console.log(replaceWords(dict_debug2, sentence_debug2)); // a a a a a a a a bbb baba a

    console.log("");
    console.log(replaceWords_refine(dict, sentence));
    console.log(replaceWords_refine(dict_debug1, sentence_debug1));
    console.log(replaceWords_refine(dict_debug2, sentence_debug2));
};

main()