/**
 * 1.3 evening
 * https://leetcode.com/problems/last-substring-in-lexicographical-order/
 */
#include <iostream>
#include <string>
using namespace std;

class Solution
{
public:
    /**
     * Accepted --- 1784ms	15.4 MB  5.18%
     * https://zxi.mytechroad.com/blog/string/leetcode-1163-last-substring-in-lexicographical-order/
     */
    string lastSubstring(string_view s)
    {
        string_view ans;
        for (int i = 0; i < s.length(); ++i)
            if (s.substr(i) > ans)
                ans = s.substr(i);
        return string(ans);
    }
};

int main()
{
    Solution s;
    string s1 = "abab";
    string s2 = "leetcode";

    cout << s.lastSubstring(s1) << endl; // "bab"
    cout << s.lastSubstring(s2) << endl; // "tcode"

    return 0;
}