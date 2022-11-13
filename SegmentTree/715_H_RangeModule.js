/*
* 09/23/22 night
* https://leetcode.com/problems/range-module/
*/

const pr = console.log;

function SegNode(l, r, state) {
    this.l = l;
    this.r = r;
    this.state = state;
    this.left = null;
    this.right = null;
}

function SegmentTree() {
    let root = new SegNode(0, 1e9, false);
    return { update, query, add, remove }
    function update(node, l, r, state) {
        if (l <= node.l && r >= node.r) {
            node.state = state;
            node.left = null;
            node.right = null;
            return node.state;
        }
        if (l >= node.r || r <= node.l) return node.state;
        let mid = node.l + parseInt((node.r - node.l) / 2);
        if (node.left == null) {
            node.left = new SegNode(node.l, mid, node.state);
            node.right = new SegNode(mid, node.r, node.state);
        }
        let left = update(node.left, l, r, state);
        let right = update(node.right, l, r, state);
        node.state = left && right;
        return node.state;
    }
    function query(l, r) {
        return dfs(root, l, r);
    }
    function dfs(node, l, r) {
        if (l >= node.r || r <= node.l) return true;
        if ((l <= node.l && r >= node.r) || (node.left == null)) return node.state;
        let mid = node.l + parseInt((node.r - node.l) / 2);
        if (r <= mid) {
            return dfs(node.left, l, r);
        } else if (l >= mid) {
            return dfs(node.right, l, r);
        } else {
            return dfs(node.left, l, r) && dfs(node.right, l, r);
        }
    }
    function add(l, r) {
        update(root, l, r, true);
    }
    function remove(l, r) {
        update(root, l, r, false);
    }
}

// Accepted --- 869ms 5.22%
// reference: https://leetcode.com/problems/range-module/discuss/495876/Clean-And-Concise-Lazy-Propagation-Segment-Tree
function RangeModule1() {
    let st = new SegmentTree();
    return { addRange, queryRange, removeRange }
    function addRange(left, right) {
        st.add(left, right);
    }
    function queryRange(left, right) {
        return st.query(left, right);
    }
    function removeRange(left, right) {
        st.remove(left, right);
    }
}

// Accepted --- 737ms
function RangeModule() {
    let a = [];
    return { addRange, queryRange, removeRange }
    function addRange(left, right) {
        let res = [], move = 0;
        for (const [l, r] of a) {
            if (r < left) {
                res.push([l, r]);
                move++;
            } else if (l > right) {
                res.push([l, r]);
            } else {
                left = Math.min(left, l);
                right = Math.max(right, r);
            }
        }
        res.splice(move, 0, [left, right]);
        a = res;
    }
    function queryRange(left, right) {
        for (const [l, r] of a) {
            if (l <= left && r >= right) return true;
        }
        return false;
    }
    function removeRange(left, right) {
        let res = [], t = [], move = 0;
        for (const [l, r] of a) {
            if (r <= left) {
                res.push([l, r]);
                move++;
            } else if (l >= right) {
                res.push([l, r]);
            } else {
                if (l < left) t.push([l, left]);
                if (r > right) t.push([right, r]);
            }
        }
        res = res.slice(0, move).concat(t).concat(res.slice(move));
        a = res;
    }
}

const main = () => {
    let rangeModule = new RangeModule();
    rangeModule.addRange(10, 20);
    rangeModule.removeRange(14, 16);
    pr(rangeModule.queryRange(10, 14)); // true
    pr(rangeModule.queryRange(13, 15)); // false
    pr(rangeModule.queryRange(16, 17)); // true
};

main()
