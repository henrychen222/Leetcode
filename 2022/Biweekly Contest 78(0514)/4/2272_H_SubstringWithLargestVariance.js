/**
 * 05/14/22 morning
 * https://leetcode.com/contest/biweekly-contest-78/problems/substring-with-largest-variance/
 */

const pr = console.log;

const ord = (c) => c.charCodeAt();

// Accepted
// reference: _Hy3 arignote
// read: https://leetcode.com/problems/substring-with-largest-variance/discuss/2038222/Kadanes-algorithm-solution-(Java)
// finding the maximum subarray with a = -1 and b = 1 and other characters = 0
const largestVariance = (s) => {
    let se = new Set(s), n = s.length, res = 0;
    for (const x of se) { // max
        for (const y of se) { // min
            if (x != y) {
                let pre = Array(n + 1).fill(0), preX, preY, diff = 0;
                for (let i = 0; i < n; i++) {
                    if (s[i] == x) {
                        preX = i + 1;
                        diff++;
                    }
                    if (s[i] == y) {
                        preY = i + 1;
                        diff--;
                    } 
                    pre[i + 1] = Math.min(pre[i], diff);
                    // pr(preX, preY, "diff", diff, pre[Math.min(preX, preY) - 1])
                    if (preX == undefined || preY == undefined) continue;
                    res = Math.max(res, diff - pre[Math.min(preX, preY) - 1]);
                }
            }
        }
    }
    return res;
};

// WA
const MAX = Number.MAX_SAFE_INTEGER;
const largestVariance2 = (s) => {
    let n = s.length, max = Array(n).fill(0), min = Array(n).fill(MAX), f = Array(26).fill(0), res = MAX;
    for (let i = 0; i < n; i++) { // [l, i]
        f[ord(s[i]) - 97]++;
        let cur = op(f);
        max[i] = Math.max(max[i], cur[0]);
        min[i] = Math.min(min[i], cur[1]);
        let diff = max[i] - min[i];
        pr(max[i], min[i], "diff", diff, "s", s.slice(0, i + 1))
        res = Math.min(res, diff);
    }
    return res;
};

const op = (f) => {
    let max = Number.MIN_SAFE_INTEGER, min = Number.MAX_SAFE_INTEGER;
    for (const occ of f) {
        if (occ == 0) continue;
        max = Math.max(max, occ);
        min = Math.min(min, occ);
    }
    return [max, min];
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const cutMaxConsecutive = (a_or_s) => { let d = [], start = 0, n = a_or_s.length; for (let i = 0; i + 1 < n; i++) { if (a_or_s[i + 1] != a_or_s[i]) { d.push(a_or_s.slice(start, i + 1)); start = i + 1; } } d.push(a_or_s.slice(start)); return d; };
const largestVariance1 = (s) => {
    test(s)
    let d = cutMaxConsecutive(s), len = d.map(e => e.length), minL = Math.min(...len), maxL = Math.max(...len);
    pr(d, minL, maxL);
    let n = d.length, res = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        let e = d[i];
        if (e.length == minL) {
            for (let j = i + 1; j < n; j++) {
                let cur = d[j], curL = cur.length, diff = curL - minL + 1;
                // pr("right", e, cur, diff)
                // if (curL == maxL) return maxL - minL + 1;
                res = Math.max(res, diff);
            }
            for (let j = i - 1; ~j; j--) {
                let cur = d[j], curL = cur.length, diff = curL - minL + 1;
                // pr("left", e, cur, diff)
                // if (curL == maxL) return maxL - minL + 1;
                res = Math.max(res, diff);
            }
        }
    }
    return res;
};

const test = (s) => {
    let n = s.length, res = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sub = s.slice(i, j + 1), diff = cal(sub)
            // pr(sub, diff)
            res = Math.max(res, diff);
        }
    }
    pr("res", res);
};

const cal = (s) => {
    let f = Array(26).fill(0);
    for (const c of s) f[ord(c) - 97]++;
    let max = Number.MIN_SAFE_INTEGER, min = Number.MAX_SAFE_INTEGER
    for (const occ of f) {
        if (occ == 0) continue;
        max = Math.max(max, occ);
        min = Math.min(min, occ);
    }
    return max - min;
};

const main = () => {
    let s = "aababbb";
    let s2 = "abcde";
    let debug1 = "lucmdweawziyvixyfesksmkxkbzzzqdmrmvdxeghlrlyteuhvumwppwltssrlboozoiudqegobjvnuinwoaaxbiqivtwabunqkzvjnczasvghsvrckpzelcqeloppxwmnbeocoiximllpvhahesjxznfphohoycaqsaghpoligtghoejodmhwuzjmpwkrpehheuubiespninbzfbqtiimtzbymdrxxbjzhqanmoocicqfhdrtfwjbxkgehjdqhmmjnrrgilsvyhonfmvywaejhxxgabogdqgttfiufrgpgpduwhzgmgoecwagwdvmnobiukuigphrkupqkeaphjsqhmetkgmcramydkosqqmayrdgfiokpanxznuknqpcqsbumyrxfsmmcxvherbjykpbwdzeqjgdhysauxflcdhkmlflmygylnxubaimtmsbbapfsrqdwwihubmemmhumzhmvalwkneehsxjofrcubyscgmlwfuzepmlyvpthqlvxrzcekmbemneozbtfajwkaizheoexbtdicgzmgnbytwyruexhigheujnolqafjmvtfgeduwtkisjovklsazfoslylmqjkgafbcfsawdjlyyobskeywidozxbmmapjrhqjjtoknpujwibccdotmnfxqcmhbelrireqfxmqoitciszlhecacxrpdbxeqravhrgwylhzpamvjjmghrzywpfpxjogidkkuolqscxuqgxzfmkuiagndjfhcmuwysojjmwtdrmicpnjpxonymsuwvrodwmfbtpwyxmesmkpuctrlabbknyoyueumfitkpdzsnkurzzyexeutmbqcdbmirqndghaksbpukszbkgvgswjrixuwvzsoymjuiungsnpytstwjbekzudtjxqkwkhgyophfllqvmdwvdlywtnsvlfwkesxdhdfwytgtwkgprlocjlcjqezcwpiwldnrqwyqxrgyyrkdotjhtsppwjkpecnpyarjftdbvzhdnqkqpbkwtkcfsomzwgxnwtsoslvxbwdkfvaeyxzkadctnngewqbwftphtfcdhjbwzytmrlolbgouoluyfyngtkijgwvxmjzqcapymvdssiirusnrnmuextfeosrdsudwixozufmwatfmjjumqmnprsqdrrerjkivjlnohkgckhuzbajvfjezbsivnhnexfryxghcxvetlwnjlutskdguwlsqhcuravxvfmzeycxifyjjqvbdmlmzfsuekrszqvdtmlfcytznjkplqpveqybkdmggrnyuoabxkepgbenzaufxwrmqufmnlgndjakvhbkkkzhgdoutdphnrqhtogbrpgdifgcqzheognwlgoqszqjsshaiciiwjqoxlznfgjtytrmkmypspmmsyencfxdjtzzlzgjzzoqwkzriqhvfqigezstcwcflbhyalipesdxddoyzcdskthyiasfdkgxgigirbixeaneynxedrbvfybpxxonssjylrahpkklrjgvbzllsfinxtcdkejynhxekkehqlizormtlmglsakfrketakpgsziogdgtfpwzeufejryluxjjuwfcgvbipmkrgtnfupqshysughfgnxtfgazdybvdtiqiimxibxlxhzsorqgshaauhgjszlfhaoxzfhnnfsdnsxqjmhaliuhavzqielpcqjzbzelrnruhqzxrynexubqpkhsoqrearfdxmliaiamfaorysjpuldzvuqnddmskegfmrxdgeonfhyuzhpgmghsvkvolhvrdyqvgqxshjjzrozkhkrsoktmvpkllizosqdsmybnwmybkyfqxyaeumgcubtdwtlbxuhcowgqvvrraazmeoamazjbljfzfvjmjhiifpskinydncsbcoefknvjzqinbfvgyyfjzqewxwdzivzeemqvxmjrsuxavjeqtbklezsqeas";
    let debug2 = "aaaaa";
    pr(largestVariance(s))
    pr(largestVariance(s2))
    pr(largestVariance(debug1)) // 45
    pr(largestVariance(debug2)) // 0
};

main()