/**
 * 5.9 night
 * https://leetcode.com/contest/weekly-contest-188/problems/minimum-time-to-collect-all-apples-in-a-tree/
 * https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/  Tree
 */
#include <iostream>
#include <vector>
#include <set>
using namespace std;

class Solution
{
private:
    int N;
    vector<set<int>> adj;
    int dfs(int node, int par, const vector<bool> &apple)
    {
        int sum = 0;
        for (set<int>::iterator it = adj[node].begin(); it != adj[node].end(); it++)
        {
            if (*it == par)
                continue;
            sum += dfs(*it, node, apple);
        }

        if (sum || apple[node])
        {
            sum += 2;
        }

        return sum;
    }

public:
    int minTime(int n, vector<vector<int>> &edges, vector<bool> &hasApple)
    {
        N = n;
        adj = vector<set<int>>(N, set<int>());
        for (int i = 0; i < edges.size(); i++)
        {
            adj[edges[i][0]].insert(edges[i][1]);
            adj[edges[i][1]].insert(edges[i][0]);
        }

        return max(0, dfs(0, -1, hasApple) - 2);
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