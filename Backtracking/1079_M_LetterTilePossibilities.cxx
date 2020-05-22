// 5.20 night 5.21 night
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution
{
public:
    void print(vector<int> const &input)
    {
        for (int i = 0; i < input.size(); i++)
        {
            cout << input.at(i) << ' ';
        }
        cout << endl;
    }

    void print_map(unordered_map<char, int> map)
    {
        for (const auto &p : map)
            cout << "map[" << p.first << "] = " << p.second << '\n';
    }

    // https://blog.csdn.net/fuxuemingzhu/article/details/101354494
    int numTilePossibilities_csdn(string tiles)
    {
        vector<int> count(26, 0);
        for (char c : tiles)
        {
            count[c - 'A']++;
        }
        int res = 0;

        // print(count);
        // cout << count.size() << endl;
        backtrack(count, res);

        // print(count);
        // cout << count.size() << endl;
        return res;
    }
    void backtrack(vector<int> &count, int &res)
    {
        for (int i = 0; i < 26; ++i)
        {
            if (count[i] == 0)
            {
                continue;
            }
            res++;
            // cout << res << endl;
            count[i]--;
            backtrack(count, res);
            count[i]++;
        }
    }

    int ans;
    int numTilePossibilities_acwing(string tiles)
    {
        unordered_map<char, int> seen;
        vector<int> num;
        print_map(seen);
        for (auto &c : tiles)
        {
            if (seen.find(c) == seen.end())
            {
                cout << c << endl;
                // cout << seen[c] << endl;
                seen[c] = num.size();
                num.push_back(0);
            }
            num[seen[c]]++;
        }
        print(num);
        ans = 0;
        dfs(num);
        return ans - 1;
    }

    void dfs(vector<int> &num)
    {
        ans++;
        for (int i = 0; i < num.size(); i++)
        {
            if (num[i] > 0)
            {
                num[i]--;
                dfs(num);
                num[i]++;
            }
        }
    }
};

int main()
{
    Solution s;
    string tiles = "AAB";
    string tiles2 = "AAABBC";

    cout << s.numTilePossibilities_csdn(tiles) << endl;
    // cout << s.numTilePossibilities_csdn(tiles2) << endl;

    cout << endl
         << s.numTilePossibilities_acwing(tiles) << endl;
    // cout << s.numTilePossibilities_acwing(tiles2) << endl;
}