/**
 * 4.18 evening 5.18 night
 * https://leetcode.com/contest/weekly-contest-185/problems/minimum-number-of-frogs-croaking/
 */
const fillArr = (arr, n) => {
    for (let i = 0; i <= n; i++) {
        arr.push("");
    }
};

// Accepted --- 144ms 42MB 29.55%
const minNumberOfFrogs_uwi = (croakOfFrogs) => {
    let s = croakOfFrogs.split("");
    let C = "croak";
    let f = [];
    fillArr(f, 6);
    for (const c of s) {
        let ind = C.indexOf(c);
        if (ind > 0) {
            if (f[ind] == 0) return -1;
            f[ind]--;
            f[ind + 1]++;
        } else {
            if (f[5] > 0) {
                f[5]--;
            }
            f[1]++;
        }
    }
    for (let i = 1; i < 5; i++) {
        if (f[i] > 0) return -1;
    }
    return f[5];
};

// Accepted --- 120ms 37.6MB 37.65%
const minNumberOfFrogs_nhho = (croakOfFrogs) => {
    let v = [];
    fillArr(v, 5);
    for (const i of croakOfFrogs)
        if (i == 'c')
            v[0]++, v[4] = Math.max(0, v[4] - 1);
        else if (i == 'r')
            if (v[0])
                v[0]--, v[1]++;
            else
                return -1;
        else if (i == 'o')
            if (v[1])
                v[1]--, v[2]++;
            else
                return -1;
        else if (i == 'a')
            if (v[2])
                v[2]--, v[3]++;
            else
                return -1;
        else if (i == 'k')
            if (v[3])
                v[3]--, v[4]++;
            else
                return -1;
    if (v[0] || v[1] || v[2] || v[3])
        return -1;
    return v[4];
};

// Accepted --- 124ms 36.6MB 35.63%
const minNumberOfFrogs_Sd_Invol = (croakOfFrogs) => {
    let num = [];
    fillArr(num, 5);
    let res = 0;
    for (let i = 0; i < croakOfFrogs.length; ++i) {
        if (croakOfFrogs[i] == 'c') {
            if (!num[0]) ++num[0], ++res;
            --num[0];
            ++num[1];
        }
        if (croakOfFrogs[i] == 'r') {
            if (!num[1]) return -1;
            --num[1];
            ++num[2];
        }
        if (croakOfFrogs[i] == 'o') {
            if (!num[2]) return -1;
            --num[2];
            ++num[3];
        }
        if (croakOfFrogs[i] == 'a') {
            if (!num[3]) return -1;
            --num[3];
            ++num[4];
        }
        if (croakOfFrogs[i] == 'k') {
            if (!num[4]) return -1;
            --num[4];
            ++num[0];
        }
    }
    if (num[1] || num[2] || num[3] || num[4]) return -1;
    return res;
};

// Accepted --- 160ms 37.4MB 23.48%
const minNumberOfFrogs_kmjp = (croakOfFrogs) => {
    let C = [];
    fillArr(C, 5);
    let ma = 0;
    for (const c of croakOfFrogs) {
        if (c == 'c') C[0]++;
        if (c == 'r') C[0]--, C[1]++;
        if (c == 'o') C[1]--, C[2]++;
        if (c == 'a') C[2]--, C[3]++;
        if (c == 'k') C[3]--;
        if (C[0] < 0) return -1;
        if (C[1] < 0) return -1;
        if (C[2] < 0) return -1;
        if (C[3] < 0) return -1;
        ma = Math.max(ma, C[0] + C[1] + C[2] + C[3]);
    }
    if (C[0] + C[1] + C[2] + C[3]) return -1;
    return ma;
};

// Accepted --- 152ms 37.5MB 25.91%
const minNumberOfFrogs_Heltion = (croakOfFrogs) => {
    let c = 0, r = 0, o = 0, a = 0, k = 0, ans = 0;
    for (const x of croakOfFrogs) {
        if (x == 'c') c += 1;
        else if (x == 'r') r += 1;
        else if (x == 'o') o += 1;
        else if (x == 'a') a += 1;
        else if (x == 'k') k += 1;
        else return -1;
        if (r > c || o > r || a > o || k > a) return -1;
        ans = Math.max(c, ans);
        if (k == 1) {
            c -= 1;
            r -= 1;
            o -= 1;
            a -= 1;
            k -= 1;
        }
    }
    if (c) return -1;
    return ans;
};

// Accepted --- 128ms 37.8MB 33.20%
const minNumberOfFrogs_hitonanode = (croakOfFrogs) => {
    let now = [];
    fillArr(now, 5)
    for (const c of croakOfFrogs) {
        let p = -1;
        if (c == 'c') p = 0;
        if (c == 'r') p = 1;
        if (c == 'o') p = 2;
        if (c == 'a') p = 3;
        if (c == 'k') p = 4;
        let prv = (p + 4) % 5;
        if (now[prv] == 0) {
            if (prv == 4) now[prv]++;
            else return -1;
        }
        now[prv]--;
        now[p]++;
    }
    if (now[0] || now[1] || now[2] || now[3]) return -1;
    return now[4];
};

// Accepted --- 108ms 36.7MB 44.94%
const minNumberOfFrogs_lg52931 = (croakOfFrogs) => {
    let count = 0;
    let ans = 0;
    let q = 0, u = 0, a = 0, c = 0, k = 0;
    for (let i = 0; i < croakOfFrogs.length; i++) {
        if (croakOfFrogs.charAt(i) == 'c') {
            count++;
        } else if (croakOfFrogs.charAt(i) == 'k') {
            count--;
        }
        switch (croakOfFrogs.charAt(i)) {
            case 'c': q++; break;
            case 'r': u++; break;
            case 'o': a++; break;
            case 'a': c++; break;
            case 'k': k++; break;
        }
        if (u > q || a > u || c > a || k > c) return -1;
        if (count < 0) return -1;
        ans = Math.max(ans, count);
    }
    if (count != 0) return -1;
    return ans;
};

// Accepted --- 104ms 37.3MB 47.77%
const minNumberOfFrogs_taran_1407 = (croakOfFrogs) => {
    let cnt = [];
    fillArr(cnt, 5);
    let cur = 0, ans = 0;
    for (let i = 0; i < croakOfFrogs.length; i++) {
        switch (croakOfFrogs.charAt(i)) {
            case 'c': {
                if (cnt[0] == 0) cur++;
                else cnt[0]--;
                cnt[1]++;
                break;
            }
            case 'r': {
                if (cnt[1] == 0) return -1;
                else cnt[1]--;
                cnt[2]++;
                break;
            }
            case 'o': {
                if (cnt[2] == 0) return -1;
                else cnt[2]--;
                cnt[3]++;
                break;
            }
            case 'a': {
                if (cnt[3] == 0) return -1;
                else cnt[3]--;
                cnt[4]++;
                break;
            }
            case 'k': {
                if (cnt[4] == 0) return -1;
                else cnt[4]--;
                cur--;
                break;
            }
        }
        ans = Math.max(ans, cur);
    }
    for (const i of cnt) if (i > 0) return -1;
    return ans;
};


// wrong, no idea about this
const minNumberOfFrogs = (croakOfFrogs) => {
    let map = new Map();
    let croak = [];
    let c_roak = [];
    let cr_oak = [];
    let cro_ak = [];
    let croa_k = [];

    let j = 1;
    let a = 2;
    let b = 3;
    for (let i = 0; i < croakOfFrogs.length; i++) {
        let detect = croakOfFrogs.substring(i, j);
        let detect2 = croakOfFrogs.substring(a, b);
        if (detect == "croak") {
            croak.push(detect);
            croakOfFrogs.splice(i, j - i)
        } else if (detect2 == "croak") {
            croak.push(detect2);
            croakOfFrogs.splice(a, b - a);
        }
        else if (detect == "c" && detect2 == "roak") {
            c_roak.push(map.set(detect, detect2));
            croakOfFrogs.splice(i, j - i);
            croakOfFrogs.splice(a, b - a);
        } else if (detect == "cr" && detect2 == "oak") {
            cr_oak.push(map.set(detect, detect2))
            croakOfFrogs.splice(i, j - i);
            croakOfFrogs.splice(a, b - a);
        } else if (detect == "cro" && detect2 == "ak") {
            cro_ak.push(map.set(detect, detect2));
            croakOfFrogs.splice(i, j - i);
            croakOfFrogs.splice(a, b - a);
        } else if (detect == "croa" && detect2 == "k") {
            croa_k.push(map.set(detect, detect2));
            croakOfFrogs.splice(i, j - i);
            croakOfFrogs.splice(a, b - a);
        }
        j++;
        a++;
        b++;
    }
    // console.log(croak);
    // console.log(c_roak);
    // console.log(cr_oak);
    // console.log(cro_ak);
    // console.log(croa_k);
};


const main = () => {
    croakOfFrogs = "croakcroak";
    croakOfFrogs2 = "crcoakroak";
    croakOfFrogs3 = "croakcrook";
    croakOfFrogs4 = "croakcroa";

    // console.log(minNumberOfFrogs(croakOfFrogs));
    // console.log(minNumberOfFrogs(croakOfFrogs2));
    // console.log(minNumberOfFrogs(croakOfFrogs3));
    // console.log(minNumberOfFrogs(croakOfFrogs4));

    /********************************************************/
    console.log(minNumberOfFrogs_uwi(croakOfFrogs));
    console.log(minNumberOfFrogs_uwi(croakOfFrogs2));
    console.log(minNumberOfFrogs_uwi(croakOfFrogs3));
    console.log(minNumberOfFrogs_uwi(croakOfFrogs4));

    console.log("")
    console.log(minNumberOfFrogs_nhho(croakOfFrogs));
    console.log(minNumberOfFrogs_nhho(croakOfFrogs2));
    console.log(minNumberOfFrogs_nhho(croakOfFrogs3));
    console.log(minNumberOfFrogs_nhho(croakOfFrogs4));

    console.log("")
    console.log(minNumberOfFrogs_Sd_Invol(croakOfFrogs));
    console.log(minNumberOfFrogs_Sd_Invol(croakOfFrogs2));
    console.log(minNumberOfFrogs_Sd_Invol(croakOfFrogs3));
    console.log(minNumberOfFrogs_Sd_Invol(croakOfFrogs4));

    console.log("")
    console.log(minNumberOfFrogs_kmjp(croakOfFrogs));
    console.log(minNumberOfFrogs_kmjp(croakOfFrogs2));
    console.log(minNumberOfFrogs_kmjp(croakOfFrogs3));
    console.log(minNumberOfFrogs_kmjp(croakOfFrogs4));

    console.log("")
    console.log(minNumberOfFrogs_Heltion(croakOfFrogs));
    console.log(minNumberOfFrogs_Heltion(croakOfFrogs2));
    console.log(minNumberOfFrogs_Heltion(croakOfFrogs3));
    console.log(minNumberOfFrogs_Heltion(croakOfFrogs4));

    console.log("")
    console.log(minNumberOfFrogs_hitonanode(croakOfFrogs));
    console.log(minNumberOfFrogs_hitonanode(croakOfFrogs2));
    console.log(minNumberOfFrogs_hitonanode(croakOfFrogs3));
    console.log(minNumberOfFrogs_hitonanode(croakOfFrogs4));

    console.log("")
    console.log(minNumberOfFrogs_lg52931(croakOfFrogs));
    console.log(minNumberOfFrogs_lg52931(croakOfFrogs2));
    console.log(minNumberOfFrogs_lg52931(croakOfFrogs3));
    console.log(minNumberOfFrogs_lg52931(croakOfFrogs4));

    console.log("")
    console.log(minNumberOfFrogs_taran_1407(croakOfFrogs));
    console.log(minNumberOfFrogs_taran_1407(croakOfFrogs2));
    console.log(minNumberOfFrogs_taran_1407(croakOfFrogs3));
    console.log(minNumberOfFrogs_taran_1407(croakOfFrogs4));
}

main()