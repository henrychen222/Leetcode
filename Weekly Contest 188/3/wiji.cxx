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
    vector<vector<int>> adj;
    vector<int> parent;
    vector<bool> needed;
    int ans;

    bool dfs(int id, vector<bool> &hasApple)
    {
        int s = 0;
        bool valid = hasApple[id];
        for (auto p : adj[id])
        {
            if (parent[p] == -1)
            {
                parent[p] = id;
                bool v = dfs(p, hasApple);
                valid = valid || v;
            }
        }
        needed[id] = valid;
        return valid;
    }

    void calc(int id)
    {
        for (auto p : adj[id])
        {
            if ((parent[p] == id) && (needed[p]))
            {
                ans += 2;
                calc(p);
            }
        }
    }

public:
    int minTime(int n, vector<vector<int>> &edges, vector<bool> &hasApple)
    {
        adj.clear();
        adj.resize(n);
        for (auto p : edges)
        {
            adj[p[0]].push_back(p[1]);
            adj[p[1]].push_back(p[0]);
        }
        parent.assign(n, -1);
        parent[0] = -2;
        needed.assign(n, false);
        dfs(0, hasApple);

        ans = 0;
        calc(0);
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

    cout << s.minTime(n, edges, hasApple) << endl;  // 8
    cout << s.minTime(n, edges, hasApple2) << endl; // 6
    cout << s.minTime(n, edges, hasApple3) << endl; // 0
}