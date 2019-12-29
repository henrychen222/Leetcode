/*
12.28 evening
https://leetcode.com/problems/replace-the-substring-for-balanced-string/
*/
#include <iostream>
#include <string>
#include <unordered_map>
#include <numeric>
#include <vector>
using namespace std;

class Solution
{
public:
    // Accepted --- 76ms, 11.6MB, 21.96%
    /** 
     * Binary Search
     * https://blog.csdn.net/philpanic9/article/details/102649555
     * https://www.okcode.net/article/72711
     * */
    int balancedString(string s)
    {
        int x[100005][4];
        int n = s.size();

        // x[i][0]表示前i个（计数从1开始）字符中Q的数量
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < 4; j++)
                x[i + 1][j] = x[i][j];
            if (s[i] == 'Q')
                x[i + 1][0]++;
            if (s[i] == 'W')
                x[i + 1][1]++;
            if (s[i] == 'E')
                x[i + 1][2]++;
            if (s[i] == 'R')
                x[i + 1][3]++;
        }

        int ans = INT_MAX;
        for (int i = 0; i <= n; i++)
        {
            // 二分搜索
            int lo = i;
            int hi = n + 1;
            while (lo < hi)
            {
                int mid = (lo + hi) / 2;
                int ok = 1;
                for (int k = 0; k < 4; k++)
                {
                    if (x[n][k] - x[mid][k] + x[i][k] > n / 4)
                    {
                        ok = 0;
                        break;
                    }
                }
                if (ok == 1)
                    hi = mid;
                else
                    lo = mid + 1;
            }

            // lo==n+1 表明在[i,n]中找不到有效值
            if (lo != n + 1)
                ans = min(ans, lo - i);
        }

        return ans;
    }

    // Accepted --- 32ms, 10.3MB, 75.85%   
    /** 
     * double pointer / slide window
     * https://www.acwing.com/file_system/file/content/whole/index/content/133817/
     * */
    int balancedString_map_vector(string s)
    {
        int n = s.length();
        unordered_map<char, int> mp;
        mp['Q'] = 0;
        mp['W'] = 1;
        mp['E'] = 2;
        mp['R'] = 3;

        // sum of vector: https://www.geeksforgeeks.org/array-sum-in-cpp-stl/ ArrayList in java
        vector<int> sum(4, 0);
        for (int i = 0; i < n; i++)
            sum[mp[s[i]]]++;

        if (sum[0] == sum[1] && sum[0] == sum[2] && sum[0] == sum[3])
            return 0;

        int ans = n;
        vector<int> tot(4);
        for (int i = 0, j = 0; i < n; i++)
        {
            tot[mp[s[i]]]++;

            while (j <= i && check(tot, sum, i - j + 1, n / 4))
            {
                ans = min(ans, i - j + 1);
                tot[mp[s[j]]]--;
                j++;
            }
        }

        return ans;
    }

    bool check(const vector<int> &tot, const vector<int> &sum, int len, int target)
    {
        for (int i = 0; i < 4; i++)
            if (sum[i] - tot[i] > target)
                return false;

        return true;
    }

    // Accepted --- 56ms, 10.1MB, 49.70%
    /** 
     * slide window
     * https://algorithm-notes-allinone.blogspot.com/2019/10/leetcode-1234-replace-substring-for.html
     * */
    int balancedString_map(string s)
    {
        int len = s.size(), res = len;
        unordered_map<char, int> mp;
        for (auto &a : s)
            ++mp[a]; //counts outside the window
        for (int i = 0, j = 0; j < len; ++j)
        {
            --mp[s[j]]; //in the window
            while (i < len && mp['Q'] <= len / 4 && mp['W'] <= len / 4 && mp['E'] <= len / 4 && mp['R'] <= len / 4)
            {
                res = min(res, j - i + 1);
                ++mp[s[i++]];
            }
        }
        return res;
    }
};

int main()
{
    Solution s;

    string s1 = "QWER";
    string s2 = "QQWE";
    string s3 = "QQQW";
    string s4 = "QQQQ";

    cout << s.balancedString(s1) << endl; //0
    cout << s.balancedString(s2) << endl; // 1
    cout << s.balancedString(s3) << endl; // 2
    cout << s.balancedString(s4) << endl; // 3

    cout << endl
         << s.balancedString_map_vector(s1) << endl; //0
    cout << s.balancedString_map_vector(s2) << endl; // 1
    cout << s.balancedString_map_vector(s3) << endl; // 2
    cout << s.balancedString_map_vector(s4) << endl; // 3

    cout << endl
         << s.balancedString_map(s1) << endl; //0
    cout << s.balancedString_map(s2) << endl; // 1
    cout << s.balancedString_map(s3) << endl; // 2
    cout << s.balancedString_map(s4) << endl; // 3

    return 0;
}
