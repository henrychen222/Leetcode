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
public:
#define pb push_back
    vector<int> graph[100005];
    int dp[100005];
    void dfs(int u, int p)
    {
        for (int i = 0; i < graph[u].size(); i++)
        {
            int v = graph[u][i];
            if (v == p)
                continue;
            dfs(v, u);
            dp[u] += dp[v];
        }
    }
    int ans = 0;
    void bfs(int u, int p)
    {
        for (int i = 0; i < graph[u].size(); i++)
        {
            int v = graph[u][i];
            if (v == p)
                continue;
            if (dp[v] > 0)
            {
                ans += 2;
                bfs(v, u);
            }
        }
    }
    int minTime(int n, vector<vector<int>> &edges, vector<bool> &hasApple)
    {
        for (int i = 0; i < n; i++)
            dp[i] = hasApple[i];
        for (int i = 0; i < n - 1; i++)
        {
            graph[edges[i][0]].pb(edges[i][1]);
            graph[edges[i][1]].pb(edges[i][0]);
        }
        dfs(0, 0);
        bfs(0, 0);
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
    // cout << s.minTime(n, edges, hasApple) << endl;  // 8
    cout << s.minTime(n, edges, hasApple2) << endl; // 6
    // cout << s.minTime(n, edges, hasApple3) << endl; // 0
}