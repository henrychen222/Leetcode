/**
 * 9.30 night
 * https://leetcode.com/problems/longest-happy-string/
 */

// Accepted --- 80ms 63.33%
let res = '';
const longestDiverseString = (a, b, c) => {
    res = '';
    let item = ['a', 'b', 'c'];
    let map = {
        'a': a,
        'b': b,
        'c': c
    };
    let flag = 0;
    while (true) {
        if (flag == 1) break;
        // console.log(map, res, flag);
        if (res.length == 0 || res.length == 1) {
            let update = operate(map);
            map = update[0];
            flag = update[1];
        } else {
            let l = res[res.length - 1];
            let sl = res[res.length - 2];
            if (l == sl) {
                let tmp = item.filter(x => x != l);
                let f0 = map[tmp[0]];
                let f1 = map[tmp[1]];
                if (f0 == 0) {
                    if (f1 == 0) {
                        break;
                    } else {
                        res += tmp[1];
                        map[tmp[1]]--;
                    }
                } else {
                    if (f1 == 0) {
                        res += tmp[0];
                        map[tmp[0]]--;
                    } else {
                        let ch = f0 > f1 ? tmp[0] : tmp[1];
                        res += ch;
                        map[ch]--;
                    }
                }
            } else {
                let update = operate(map);
                map = update[0];
                flag = update[1];
                // console.log(map, flag);
            }
        }
    }
    // console.log(map);
    return res;
};

const operate = (m) => {
    let flag = 0;
    let map = {
        ...m
    };
    let fa = map['a'];
    let fb = map['b'];
    let fc = map['c'];
    if (fa <= 0 && fb <= 0 && fc <= 0) {
        flag = 1;
    } else {
        if (fa > 0 && fa >= fb && fa >= fc) {
            res += 'a';
            map['a']--;
        } else if (fb > 0 && fb >= fa && fb >= fc) {
            res += 'b';
            map['b']--;
        } else if (fc > 0 && fc >= fa && fc >= fb) {
            res += 'c';
            map['c']--;
        }
    }
    return [map, flag];
};

const main = () => {
    let a = 1,
        b = 1,
        c = 7;
    let a2 = 2,
        b2 = 2,
        c2 = 1;
    let a3 = 7,
        b3 = 1,
        c3 = 0;
    console.log(longestDiverseString(a, b, c));
    console.log(longestDiverseString(a2, b2, c2));
    console.log(longestDiverseString(a3, b3, c3));
};

main()