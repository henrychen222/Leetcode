/**
 * 07/02/22 evening
 * https://leetcode.com/contest/weekly-contest-300/problems/decode-the-message/
 */

const pr = console.log;
const ord = (c) => c.charCodeAt();
const char = (ascii) => String.fromCharCode(ascii);

// Accepted
const decodeMessage = (key, message) => {
    let m = new Map(), start = 97, used = new Set(), res = '';
    for (const c of key) {
        if (c == ' ' || used.has(c)) continue;
        m.set(c, char(start++));
        used.add(c);
    }
    for (const c of message) res += c == ' ' ? c : m.get(c);
    return res;
};

const main = () => {
    let key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv";
    let key2 = "eljuxhpwnyrdgtqkviszcfmabo", message2 = "zwx hnfx lqantp mnoeius ycgk vcnjrdb";
    pr(decodeMessage(key, message))
    pr(decodeMessage(key2, message2))
};

main()