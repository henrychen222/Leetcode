/*
 * 11/12/22 night
 * https://leetcode.com/contest/weekly-contest-319/problems/maximum-number-of-non-overlapping-palindrome-substrings/
 * 
 * reference:
 * https://leetcode.cn/circle/discuss/rYjnBt/  TsReaper
 */

const pr = console.log;

// Accepted use less memory
const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = new Int32Array(m).fill(0); d.push(t); } return d; };

// RE 
// const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };

const countPalindromeSub = () => {
    for (let i = 0; i < n; i++) {
        isPal(i, i);
        isPal(i, i + 1);
    }
};

const isPal = (l, r) => {
    while (l >= 0 && r < n && s[l] == s[r]) {
        ok[l][r] = 1;
        l--;
        r++;
    }
};

let s, n, ok;
const maxPalindromes = (S, k) => {
    s = S, n = s.length, ok = initialize2DArray(n, n);
    countPalindromeSub();
    let dp = Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1];
        for (let j = i - k; j >= 0; j--) {
            if (ok[j][i - 1]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
    return dp[n];
};

const main = () => {
    let s = "abaccdbbd", k = 3;
    let s2 = "adbcda", k2 = 2;
    let s_debug1 = "ghublzvcaqqdrwafjmzzimrrmizzmjfawrdqqacvzlbuhggrsnsjpgijwqbazlgrsqqsrglzabqwjigpjsnsrglplnaakjztutzjkaanlplgasdmlovjqblcxicnkjooiunhxhkauaoahsyyshaoauakhxhnuioojkncixclbqjvolfqanjdosykmqilsoefcalidfsmlncobicwnwcibocnlmsfdilacfeosliqmkysodjnaqzjhzrnnbmokviaaaufddwxxwddfuaaaivkombnnrzrzqyxpeknljvbmhpqvwlyntuwemkjlhewlqoqlwehljkmewutnylwvqphmbvjlnkepxyyzksfwsiwhiuaasbjgonqnrjiybwfzpgwefcfbhbfcfewgpzfwbyijrnqnogjbsaauihwiswmuezdsypbaxhollhhfanqddqnafhhllohxabpysdzeumuyjyrqcehuijzpcfrpjyauyluafhyijxvaysvptpvsyavxjiyhfaulyuayjprfcpzjiuhecqrggszpmqliatlbfmgmfbltailqmpzsggwvyfhojmgvfemjicxuefkxmwhlqwyeobmqrcizjwjzicrqmboeywqlhwmxkfeuxcijmeflslwoxnnkvudapxrnlhsbmsmiaqggqaimsmbshlnrxpaduvknnxowlsllrdgopuibvemtdfnvjrehlihgedgfxztmaotqlpppplqtoamtzxfgdeghilherjvnfdtmevbitgbskrmbbhqoulywtienfvcapidubudipacvfneitwyluoqhbbmrksbgmccuydcjyumdykyctggsjhhlqpjyyjpqlhhjsggtcykydmuyjcdyuctrbqsnanerifftlgjwrqjtdpdtjqrwjgltffiridfbifarlpcvgxwktxoollooxtkwxgvcplrafibfdinfwbsozuadmvcaqpvngognvpqacvmdauzosbwulqblbiquvguoizpekbktfwznpqsfcfsqpnzwftkbkepziougvuqiblbqlupnxwnfjtbsmwxintvszyjxccxzkjlkndorqrodnkljkzxccxjyzsvtnixwmsbtjfnwxnzozdxykouunvvmenweewrrmxblwfiseogjejgoesifwlbxmrrweewnemvvnuuokyxdzhthmqxsqeymxwzcllygtsaluuiayaiuulastgyllczwxmyeqsxqmhjrpfoptgzrsqxshageqqqegahsxqsrzgtpofjddkmnnkvpzonubwdnkjwopwyttywpowjkndwbunozpvknnmkddjmujcbfjuthahyhahtujfbcjumxswsanjhkvketcoqiyfdfyiqoctekvkhjnaswsqyckstkdcdllpsplldcdktskcyqphlpesulaopkuaeyszyzxenipvbigbkcckbgibvpinexzyzsyeaukpoaluseplhpwmuhtlvzvtjynogkufsznfmjffjmfnzsfukgonyjtvzvlthumwtexxngcphnqgpjfhljskowwjjcwwcjjwwoksjlhfjpgqnhpcgnxxmducyaevkpxzxkyshiptkicepxqjygavttvagyjqxpeciktpihsykxzxpkveaycudmvnhoijffbcwauybgagbyuawcbffjiohcozyjodpsfxljwxfgekjmmjkegfxwjlxfspdowomhaqrxfeorukfllwaonlouzpcemleamzhsshzmaelmecpzuolnoawllfkuroefxrqahmowdpansachgvcmzedqmflrowqysccntrhgdhfhdghrtnccsyqworlfmqdezmcvghcahjxfkotmysanjkfkjnasymtokfxjhkscpfwgnjtdydwklehpuqmbxebokwjyejvraiqbrhwhrbqiarvjeyjwkobexbmquphelkwdydtjngivmiqovdmrdebwiuyxuzzzddzzzuxyuiwbehs", k_debug1 = 23
    pr(maxPalindromes(s, k));
    pr(maxPalindromes(s2, k2));
    pr(maxPalindromes(s_debug1, k_debug1));
};

main()