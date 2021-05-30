/**
 * 05/23/21 daily
 * 05/26/21 afternoon
 * https://leetcode.com/problems/find-the-shortest-superstring/
 */

const getDistance3 = (s1, s2) => {
    let n = s1.length;
    let m = s2.length;
    for (let i = 1; i < n; i++) {
        if (s2.startsWith(s1.slice(i))) return m - n + i;
    }
    return m;
};

const getResFromPath3 = (w, G, p, last) => {
    let n = w.length;
    let res = '';
    let cur = (1 << n) - 1;
    let st = [];
    while (cur > 0) {
        st.push(last);
        let tmp = cur;
        cur -= 1 << last;
        last = p[tmp][last];
    }
    let i = st.pop();
    res += w[i];
    while (st.length) {
        let j = st.pop();
        res += w[j].slice(w[j].length - G[i][j]);
        i = j;
    }
    return res;
};

/**
 * Accepted --- 152ms 90.07%
 * 
 * (Travelling salesman) https://en.wikipedia.org/wiki/Travelling_salesman_problem
 * reference: https://leetcode.com/problems/find-the-shortest-superstring/discuss/194932/Travelling-Salesman-Problem
 */
const MAX = Number.MAX_SAFE_INTEGER;
const shortestSuperstring = (w) => {
    let n = w.length;
    let G = initialize2DArrayNew(n, n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            G[i][j] = getDistance3(w[i], w[j]);
            G[j][i] = getDistance3(w[j], w[i]);
        }
    }
    // pr(G);
    let dp = initialize2DArrayNew(1 << n, n);
    let p = initialize2DArrayNew(1 << n, n);
    // pr(dp);
    let [last, min, final_mask] = [-1, MAX, (1 << n) - 1];
    for (let i = 1; i < 1 << n; i++) { // for all the combinations of the nodes
        dp[i].fill(MAX);
        for (let j = 0; j < n; j++) { // for each node 
            if ((i & 1 << j) > 0) { // if the node is in the set. Assume i = 10010(18), j = 100(4), then set={1,4}, the node is 2. The node is not in this set
                let prev = i - (1 << j); // the set without j. Assume i = 10010, j = 10 then pre = 10000
                if (prev == 0) { // if j is the only one
                    dp[i][j] = w[j].length; // the whole word
                } else {
                    for (let k = 0; k < n; k++) { // try all the possible nodes before j
                        let potential_overlap = dp[prev][k] + G[k][j];
                        if (dp[prev][k] < MAX && potential_overlap < dp[i][j]) { // if k is valid and the length could be reduced
                            dp[i][j] = potential_overlap; // update the result
                            p[i][j] = k; // update the node before j
                        }
                    }
                }
            }
            if (i == final_mask && dp[i][j] < min) { // if i == 11...1111 means the node set contains all the nodes, and the length is smaller
                min = dp[i][j]; // update the result
                last = j; // update the last node
            }
        }
    }
    // pr("after", G);
    // pr("after", p);
    // pr("after", last);
    return getResFromPath3(w, G, p, last);
};

////////////////////////////////////////////////////////////////////////////////////////////////
// Accepted --- 5772ms 5.30%
// from fdglchen debug https://leetcode.com/problems/find-the-shortest-superstring/discuss/195487/python-bfs-solution-with-detailed-explanation(with-extra-Chinese-explanation)/950172
const shortestSuperstring2 = (w) => {
    let n = w.length;
    let G = initialize2DArrayNew(n, n);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            G[i][j] = getDistance2(w[i], w[j]);
            G[j][i] = getDistance2(w[j], w[i]);
        }
    }
    let dp = initialize2DArrayNew(1 << n, n);
    let q = [];
    for (let i = 0; i < n; i++) q.push([i, 1 << i, [i], 0]);
    let maxDis = -1;
    let p = [];
    let final_mask = (1 << n) - 1;
    while (q.length) { // bfs
        let [node, mask, path, dis] = q.shift();
        // pr(node, mask, path, dis)
        if (dis < dp[mask][node]) continue;
        if (mask == final_mask && dis > maxDis) {
            [p, maxDis] = [path, dis];
            continue;
        }
        for (let i = 0; i < n; i++) {
            if (1 << i & mask) continue;
            let next_mask = mask | 1 << i;
            let potential_overlap = dp[mask][node] + G[node][i];
            if (potential_overlap > dp[next_mask][i]) {
                dp[next_mask][i] = potential_overlap;
                q.push([i, next_mask, path.concat([i]), potential_overlap]);
            }
        }
    }
    // pr(G, p);
    return getResFromPath2(w, G, p);
};

const getDistance2 = (s1, s2) => {
    let n = s1.length;
    for (let i = 1; i < n; i++) {
        if (s2.startsWith(s1.slice(i))) return n - i + 1;
    }
    return 1;
};

const getResFromPath2 = (w, G, path) => {
    let res = w[path[0]];
    let n = path.length;
    for (let i = 1; i < n; i++) {
        let [prev, cur] = [path[i - 1], path[i]];
        let idx = G[prev][cur] - 1;
        res += w[cur].slice(idx);
    }
    return res;
};

/**
 * reference:
 * https://leetcode.com/problems/find-the-shortest-superstring/discuss/195487/python-bfs-solution-with-detailed-explanation(with-extra-Chinese-explanation)
 * https://buptwc.github.io/2018/11/19/Leetcode-943-Find-the-Shortest-Superstring/
 * 
 * 本题转化为: 在一个图中，从某个点出发将所有点恰好遍历一遍，使得最后路过的路径长度最长
 */
// TLE, some case the queue cannot be empty, endless loop
const shortestSuperstring1 = (w) => {
    let n = w.length;
    let G = initialize2DArrayNew(n, n);
    // pr(G)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            G[i][j] = getDistance(w[i], w[j]);
            G[j][i] = getDistance(w[j], w[i]);
        }
    }
    let dp = initialize2DArrayNew(1 << n, n);
    // pr(dp);
    let q = [];
    for (let i = 0; i < n; i++) q.push([i, 1 << i, [i], 0]);
    // pr(q);
    let l = -1; // 记录最大的repeat_len
    let p = []; // 记录对应的path
    while (q.length) { // bfs
        let [node, mask, path, dis] = q.shift();
        // pr(node, mask, path, dis)
        if (dis < dp[mask][node]) continue;
        if (mask == (1 << n) - 1 && dis > l) {
            // p = path;
            // l = dis;
            [p, l] = [path, dis];
            continue;
        }
        for (let i = 0; i < n; i++) {
            let next_mask = mask | 1 << i;
            // pr(next_mask);
            /**
             * case1: 不能走回头路，因为每个结点只能遍历一次
             * case2: 如果走当前这条路能够获得更大的重复长度，才继续考虑
             */
            if (next_mask != mask && dp[mask][node] + G[node][i] > dp[next_mask][i]) { // issue. >= will have duplicated calculation, but need = for edge 0 case
                // if (next_mask != mask && dp[mask][node] + G[node][i] >= dp[next_mask][i]) {
                dp[next_mask][i] = dp[mask][node] + G[node][i];
                q.push([i, next_mask, path.concat([i]), dp[next_mask][i]]);
            }
        }
    }
    // pr(G, p);
    return getResFromPath(w, G, p);
};

const getDistance = (s1, s2) => {
    let n = s1.length;
    for (let i = 1; i < n; i++) {
        if (s2.startsWith(s1.slice(i))) return n - i;
    }
    return 0;
};

const getResFromPath = (w, G, path) => {
    let res = w[path[0]];
    let n = path.length;
    for (let i = 1; i < n; i++) {
        let idx = G[path[i - 1]][path[i]];
        res += w[path[i]].slice(idx);
    }
    return res;
};

const initialize2DArrayNew = (n, m) => {
    let data = [];
    for (let i = 0; i < n; i++) {
        let tmp = Array(m).fill(0);
        data.push(tmp);
    }
    return data;
};

const pr = console.log;
const main = () => {
    let words = ["alex", "loves", "leetcode"];
    let words2 = ["catg", "ctaagt", "gcta", "ttca", "atgcatc"];
    let debug1 = ["bccbacbcbabb", "wuyhrlvbvzfrop", "baaaaaabbbaaabbab", "kjhajgsbic", "eccge", "ccac", "fdgfgccfcefedfeda", "babcba", "ghahcebhgceecgfia", "baaabbabbac", "beaddcdabeafbfc", "rsaac"];
    let debug2 = ["nbsgonqmpreelpbr", "hnysjajtiguehrokus", "udgzbzmevnkzzba", "axtbmcpbmoubyoscn", "vqnbsgonqmpreel", "xvqnbsgonqmpree", "ajtiguehrokustktudgz", "brgkgihuetpqrhhbhn", "dgzbzmevnkzzbaxtbmcp", "ehrokustktudgzbzmevn", "uetpqrhhbhnysjaj", "vnkzzbaxtbmcpbmo"];
    pr(shortestSuperstring(words));
    pr(shortestSuperstring(words2));
    pr(shortestSuperstring(debug1));
    pr(shortestSuperstring(debug2));
};
main()