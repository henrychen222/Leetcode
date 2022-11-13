// 01/08/21 noon

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };

const possibleToStamp = (g, h, w) => {
  let n = g.length, m = g[0].length, pre = preSum2D(g, n, m), visit = initialize2DArray(n + 1, m + 1);
  // pr(pre);
  for (let i = 0; i + h <= n; i++) {
    for (let j = 0; j + w <= m; j++) {
      if (subMatrixSum(pre, i, i + h - 1, j, j + w - 1) == 0) {
        addMatrix(visit, i, i + h - 1, j, j + w - 1);
      }
    }
  }
  // pr("visit1", visit);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      visit[i][j] += visit[i - 1][j];
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < m; j++) {
      visit[i][j] += visit[i][j - 1];
    }
  }
  // pr("visit2", visit);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (g[i][j] == 0 && visit[i][j] == 0) return false;
    }
  }
  return true;
};

const addMatrix = (visit, x1, x2, y1, y2) => {
  visit[x1][y1]++;
  visit[x2 + 1][y1]--;
  visit[x1][y2 + 1]--;
  visit[x2 + 1][y2 + 1]++;
};

const subMatrixSum = (pre, x1, x2, y1, y2) => {
  // pr(x1, y1, x1, y1);
  let res = pre[x2][y2];
  if (x1 > 0) res -= pre[x1 - 1][y2];
  if (y1 > 0) res -= pre[x2][y1 - 1];
  if (x1 > 0 && y1 > 0) res += pre[x1 - 1][y1 - 1];
  return res;
};

const preSum2D = (g, n, m) => {
  let pre = initialize2DArray(n, m);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      pre[i][j] = g[i][j];
    }
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      pre[i][j] += pre[i - 1][j];
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < m; j++) {
      pre[i][j] += pre[i][j - 1];
    }
  }
  return pre;
};

const main = () => {
  let grid = [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]], stampHeight = 4, stampWidth = 3;
  let grid2 = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], stampHeight2 = 2, stampWidth2 = 2;
  let grid_debug1 = [[0], [0], [0], [0], [0], [0]], stampHeight_debug1 = 6, stampWidth_debug1 = 1;
  pr(possibleToStamp(grid, stampHeight, stampWidth))
  pr(possibleToStamp(grid2, stampHeight2, stampWidth2))
  pr(possibleToStamp(grid_debug1, stampHeight_debug1, stampWidth_debug1))
};

main()