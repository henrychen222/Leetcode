/**
 * 5.9 night
 * https://leetcode.com/contest/weekly-contest-188/problems/minimum-time-to-collect-all-apples-in-a-tree/
 * https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/  Tree
 */
#include <iostream>
#include <vector>
using namespace std;

// kmjp
#define FOR(x, to) for (x = 0; x < (to); x++)
#define FORR(x, arr) for (auto &x : arr)
vector<int> E[101010];
vector<bool> H;
int ret;

// huzecong
struct edge
{
    int next, node;
};
const int N_huzecong = 100100;

// LayCurse
void *wmem;
char memarr[96000000];
template <class T>
inline void walloc1d(T **arr, int x, void **mem = &wmem)
{
    static int skip[16] = {0, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
    (*mem) = (void *)(((char *)(*mem)) + skip[((unsigned long long)(*mem)) & 15]);
    (*arr) = (T *)(*mem);
    (*mem) = ((*arr) + x);
}
struct graph
{
    int N;
    int *es;
    int **edge;
    void setEdge(int N__, int M, int A[], int B[], void **mem = &wmem)
    {
        int i;
        N = N__;
        walloc1d(&es, N, mem);
        walloc1d(&edge, N, mem);
        for (i = (0); i < (N); i++)
        {
            es[i] = 0;
        }
        for (i = (0); i < (M); i++)
        {
            es[A[i]]++;
            es[B[i]]++;
        }
        for (i = (0); i < (N); i++)
        {
            walloc1d(&edge[i], es[i], mem);
        }
        for (i = (0); i < (N); i++)
        {
            es[i] = 0;
        }
        for (i = (0); i < (M); i++)
        {
            edge[A[i]][es[A[i]]++] = B[i];
            edge[B[i]][es[B[i]]++] = A[i];
        }
    }
    template <class S>
    void SubTreeWeight(int root, S weight[], S res[], void *mem = wmem)
    {
        int i;
        int j;
        int k;
        int m;
        int *q;
        int qs = 0;
        int qe = 1;
        walloc1d(&q, N, &mem);
        for (i = (0); i < (N); i++)
        {
            res[i] = -1;
        }
        res[root] = 0;
        q[0] = root;
        while (qs < qe)
        {
            i = q[qs++];
            for (j = (0); j < (es[i]); j++)
            {
                k = edge[i][j];
                if (res[k] == 0)
                {
                    continue;
                }
                res[k] = 0;
                q[qe++] = k;
            }
        }
        for (m = (N)-1; m >= (0); m--)
        {
            i = q[m];
            res[i] = weight[i];
            for (j = (0); j < (es[i]); j++)
            {
                k = edge[i][j];
                res[i] += res[k];
            }
        }
    }
};
#define main dummy_main
int main()
{
    wmem = memarr;
    return 0;
}
#undef main
int N;
int M;
int A[100000];
int B[100000];
int W[100000];
graph g;
int sm[100000];

class Solution
{
public:
    int dfs_kmjp(int cur, int pre)
    {
        int take = H[cur];
        FORR(e, E[cur])
        if (e != pre)
            take |= dfs_kmjp(e, cur);
        if (take && cur)
            ret += 2;
        return take;
    }

    int minTime_kmjp(int n, vector<vector<int>> &edges, vector<bool> &hasApple)
    {
        H = hasApple;
        int N = H.size();
        int i;
        FOR(i, N)
        E[i].clear();
        FORR(e, edges)
        {
            E[e[0]].push_back(e[1]);
            E[e[1]].push_back(e[0]);
        }
        ret = 0;
        dfs_kmjp(0, -1);
        return ret;
    }

    ////////////////////////////////////////////////////////////////////////
    int head[N_huzecong + 1], tot, val[N_huzecong + 1], sz[N_huzecong + 1];
    edge e[N_huzecong * 2 + 1];
    inline void addedge(int a, int b)
    {
        e[++tot].next = head[a];
        head[a] = tot, e[tot].node = b;
    }

    int dfs_huzecong(int x, int f = -1)
    {
        int ans = 0, cnt = 0;
        sz[x] = val[x];
        for (int i = head[x]; i; i = e[i].next)
        {
            int node = e[i].node;
            if (node == f)
                continue;
            ans += dfs_huzecong(node, x);
            if (sz[node] > 0)
            {
                ++cnt;
                sz[x] += sz[node];
            }
        }
        if (cnt > 0)
            ans += cnt * 2;
        return ans;
    }

    ////////////////////////////////////////////////////////////////////////
    int minTime_huzecong(int n, vector<vector<int>> &edges, vector<bool> &hasApple)
    {
        memset(head, 0, sizeof head);
        tot = 0;
        for (auto &e : edges)
        {
            addedge(e[0], e[1]);
            addedge(e[1], e[0]);
        }
        for (int i = 0; i < n; ++i)
            val[i] = hasApple[i];
        return dfs_huzecong(0);
    }

    ////////////////////////////////////////////////////////////////////////
    int minTime_liouzhou_101(int n, vector<vector<int>> &edges, vector<bool> &hasApple)
    {
        vector<vector<int>> v(n);
        for (auto e : edges)
        {
            int x = e[0], y = e[1];
            v[x].push_back(y);
            v[y].push_back(x);
        }
        vector<int> sz(n);
        function<void(int, int)> dfs = [&](int x, int pre) {
            sz[x] = hasApple[x];
            for (auto y : v[x])
            {
                if (y == pre)
                    continue;
                dfs(y, x);
                sz[x] += sz[y];
            }
        };
        dfs(0, -1);

        int ret = 0;
        function<void(int, int)> dfs2 = [&](int x, int pre) {
            for (auto y : v[x])
            {
                if (y == pre)
                    continue;
                if (sz[y])
                {
                    ret += 2;
                    dfs2(y, x);
                }
            }
        };
        dfs2(0, -1);
        return ret;
    }

    ////////////////////////////////////////////////////////////////////////
    int minTime_LayCurse(int n, vector<vector<int>> &edges, vector<bool> &hasApple)
    {
        int i;
        dummy_main();
        int res = 0;
        N = n;
        M = n - 1;
        for (i = (0); i < (M); i++)
        {
            A[i] = edges[i][0];
            B[i] = edges[i][1];
        }
        g.setEdge(N, M, A, B);
        for (i = (0); i < (N); i++)
        {
            W[i] = 0;
        }
        for (i = (0); i < (N); i++)
        {
            if (hasApple[i])
            {
                W[i] = 1;
            }
        }
        g.SubTreeWeight(0, W, sm);
        for (i = (1); i < (N); i++)
        {
            if (sm[i])
            {
                res += 2;
            }
        }
        return res;
    }
};

int main()
{
    Solution s;

    // Example One
    int n = 7;
    vector<vector<int>> edges;
    vector<int> edge1_exampleOne;
    edge1_exampleOne.push_back(0);
    edge1_exampleOne.push_back(1);
    vector<int> edge2_exampleOne;
    edge2_exampleOne.push_back(0);
    edge2_exampleOne.push_back(2);
    vector<int> edge3_exampleOne;
    edge3_exampleOne.push_back(1);
    edge3_exampleOne.push_back(4);
    vector<int> edge4_exampleOne;
    edge4_exampleOne.push_back(1);
    edge4_exampleOne.push_back(5);
    vector<int> edge5_exampleOne;
    edge5_exampleOne.push_back(2);
    edge5_exampleOne.push_back(3);
    vector<int> edge6_exampleOne;
    edge6_exampleOne.push_back(2);
    edge6_exampleOne.push_back(6);
    edges.push_back(edge1_exampleOne);
    edges.push_back(edge2_exampleOne);
    edges.push_back(edge3_exampleOne);
    edges.push_back(edge4_exampleOne);
    edges.push_back(edge5_exampleOne);
    edges.push_back(edge6_exampleOne);
    vector<bool> hasApple;
    hasApple.push_back(false);
    hasApple.push_back(false);
    hasApple.push_back(true);
    hasApple.push_back(false);
    hasApple.push_back(true);
    hasApple.push_back(true);
    hasApple.push_back(false);

    // Example Two
    vector<bool> hasApple2;
    hasApple2.push_back(false);
    hasApple2.push_back(false);
    hasApple2.push_back(true);
    hasApple2.push_back(false);
    hasApple2.push_back(false);
    hasApple2.push_back(true);
    hasApple2.push_back(false);

    // Example Three
    vector<bool> hasApple3;
    hasApple3.push_back(false);
    hasApple3.push_back(false);
    hasApple3.push_back(false);
    hasApple3.push_back(false);
    hasApple3.push_back(false);
    hasApple3.push_back(false);
    hasApple3.push_back(false);

    cout << s.minTime_kmjp(n, edges, hasApple) << endl;  // 8
    cout << s.minTime_kmjp(n, edges, hasApple2) << endl; // 6
    cout << s.minTime_kmjp(n, edges, hasApple3) << endl; // 0

    cout << endl
         << s.minTime_huzecong(n, edges, hasApple) << endl;
    cout << s.minTime_huzecong(n, edges, hasApple2) << endl;
    cout << s.minTime_huzecong(n, edges, hasApple3) << endl;

    cout << endl
         << s.minTime_liouzhou_101(n, edges, hasApple) << endl;
    cout << s.minTime_liouzhou_101(n, edges, hasApple2) << endl;
    cout << s.minTime_liouzhou_101(n, edges, hasApple3) << endl;

    cout << endl
         << s.minTime_LayCurse(n, edges, hasApple) << endl;
    cout << s.minTime_LayCurse(n, edges, hasApple2) << endl;
    cout << s.minTime_LayCurse(n, edges, hasApple3) << endl;
}
