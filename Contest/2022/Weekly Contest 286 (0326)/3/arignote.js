// 03/26/22 evening

const pr = console.log;

const reverse = (s) => { let res = ""; for (let i = s.length - 1; ~i; i--) { res += s[i]; } return res; };

// Accepted
const kthPalindrome = (queries, n) => {
    let res = [];
    for (const q of queries) {
        let x = 10 ** (n - 1 >> 1) + q - 1, s = x + ''; // left half base
        // pr(s, reverse(s.slice(0, s.length - n % 2)));
        res.push(s.length > n + 1 >> 1 ? -1 : s + reverse(s.slice(0, s.length - n % 2)));
    }
    return res;
};

const main = () => {
    let queries = [1, 2, 3, 4, 5, 90], intLength = 3;
    let queries2 = [2, 4, 6], intLength2 = 4;
    let queries_debug1 = [2, 201429812, 8, 520498110, 492711727, 339882032, 462074369, 9, 7, 6], intLength_debug1 = 1;
    let queries_debug2 = [946079757, 8, 96, 79, 35, 83, 191188284, 98, 24, 31, 65, 69615657, 97208210, 91550324], intLength_debug2 = 15
    pr(kthPalindrome(queries, intLength))
    pr(kthPalindrome(queries2, intLength2))
    pr(kthPalindrome(queries_debug1, intLength_debug1))
    pr(kthPalindrome(queries_debug2, intLength_debug2))
};

main()