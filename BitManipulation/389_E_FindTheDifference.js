/**
 * 6.17 noon  8.3 night complete
 * https://leetcode.com/problems/find-the-difference/
 */

// Accepted --- 88ms 38.4MB 40.89%
const findTheDifference3 = (s, t) => {
    let sArr = s.split("");
    let tArr = t.split("");
    let sElement = [...new Set(sArr)];
    let tElement = [...new Set(tArr)];
    for (const c of tElement) {
        if (sElement.indexOf(c) == -1) {
            return c;
        } else {
            if (getFrequency(sArr, c) != getFrequency(tArr, c)) return c;
        }
    }
};

// Accepted --- 84ms 38.2MB 48.33%
const findTheDifference2 = (s, t) => {
    let sArr = s.split("");
    let tArr = t.split("");
    let tElement = [...new Set(tArr)];
    for (const c of tElement) {
        if ((getFrequency(sArr, c) != getFrequency(tArr, c))) return c;
    }
};

// Accepted --- 88ms 38.5MB	40.89%
const findTheDifference = (s, t) => {
    let sArr = s.split("");
    let tArr = t.split("");
    let sElement = [...new Set(sArr)];
    let tElement = [...new Set(tArr)];
    for (const c of tElement) {
        if (sElement.indexOf(c) == -1) return c;
        if (getFrequency(sArr, c) != getFrequency(tArr, c)) return c;
    }
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let s = "abcd",
        t = "abcde";
    let s_debug1 = "a",
        t_debug1 = "aa";
    let s_debug2 = "ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor",
        t_debug2 = "qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj"
    console.log(findTheDifference(s, t));
    console.log(findTheDifference(s_debug1, t_debug1)); // a
    console.log(findTheDifference(s_debug2, t_debug2)); // t

    console.log("");
    console.log(findTheDifference2(s, t));
    console.log(findTheDifference2(s_debug1, t_debug1)); // a
    console.log(findTheDifference2(s_debug2, t_debug2)); // t

    console.log("");
    console.log(findTheDifference3(s, t));
    console.log(findTheDifference3(s_debug1, t_debug1)); // a
    console.log(findTheDifference3(s_debug2, t_debug2)); // t
};

main()


// // need to fix
// const findTheDifference = (s, t) => {
//     let sstr = s.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
//     let tstr = t.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
//     // console.log(sstr);
//     // console.log(tstr);
//     return t.replace(s, '');
// };