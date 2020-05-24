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
  pair<int, int> DFS(int from, vector<vector<int>> &adj, vector<bool> &apple, int parent)
  {
    bool has_apple = apple[from];
    int total_step = 0;
    for (auto &to : adj[from])
    {
      if (to == parent)
        continue;
      auto [lo_has_apple, n_step] = DFS(to, adj, apple, from); // need to run c++17 for decomposition declarations
      if (lo_has_apple)
      {
        has_apple = true;
        total_step += n_step + 2;
      }
    }
    if (!has_apple)
      total_step = 0;
    return {has_apple, total_step};
  }

public:
  int minTime(int n, vector<vector<int>> &edges, vector<bool> &hasApple)
  {
    vector<vector<int>> adj(n);
    for (auto &e : edges)
    {
      adj[e[0]].emplace_back(e[1]);
      adj[e[1]].emplace_back(e[0]);
    }
    auto [has, steps] = DFS(0, adj, hasApple, -1);
    return steps;
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