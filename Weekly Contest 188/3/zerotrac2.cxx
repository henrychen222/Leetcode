/**
 * 5.9 night
 * https://leetcode.com/contest/weekly-contest-188/problems/minimum-time-to-collect-all-apples-in-a-tree/
 * https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/  Tree
 */
#include <iostream>
#include <vector>
using namespace std;

class Solution
{
private:
    vector<vector<int>> edges;
    vector<bool> has;
    int ans;

public:
    void dfs1(int u, int fa)
    {
        // cout << "dfs1" << u << " " << fa << "\n";
        for (int v : edges[u])
        {
            if (v != fa)
            {
                dfs1(v, u);
                has[u] = has[u] | has[v];
            }
        }
    }

    void dfs2(int u, int fa)
    {
        // cout << "dfs1" << u << " " << fa << "\n";
        for (int v : edges[u])
        {
            if (v != fa && has[v])
            {
                ++ans;
                dfs2(v, u);
                ++ans;
            }
        }
    }

    int minTime(int n, vector<vector<int>> &_edges, vector<bool> &hasApple)
    {
        edges.resize(n);
        has = hasApple;
        for (const auto &e : _edges)
        {
            edges[e[0]].push_back(e[1]);
            edges[e[1]].push_back(e[0]);
        }
        dfs1(0, -1);

        ans = 0;
        dfs2(0, -1);
        return ans;
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

    // Run Seperately
    // cout << s.minTime(n, edges, hasApple) << endl; // 8
    cout << s.minTime(n, edges, hasApple2) << endl; // 6
    // cout << s.minTime(n, edges, hasApple3) << endl; // 0
}