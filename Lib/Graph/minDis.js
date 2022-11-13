// 07/30/22 evening

const minDis = (g, start) => {
    let n = g.length, dis = Array(n).fill(Number.MAX_SAFE_INTEGER), q = [start];
    dis[start] = 0;
    while (q.length) {
        let cur = q.shift();
        for (const child of g[cur]) {
            if (dis[child] > dis[cur] + 1) {
                dis[child] = dis[cur] + 1;
                q.push(child);
            }
        }
    }
    return dis;
};