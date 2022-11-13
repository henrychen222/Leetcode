// 5.23 night
#include <iostream>
#include <unordered_set>
using namespace std;

class Solution
{
public:
    int maxVowels(string s, int k)
    {
        unordered_set<char> vis = {'a', 'e', 'i', 'o', 'u'};
        int ans = 0, sum = 0, pos = 0;
        for (char ch : s)
        {
            sum += vis.count(ch);
            if (pos >= k)
            {
                sum -= vis.count(s[pos - k]);
            }
            if (pos >= k - 1)
            {
                ans = max(ans, sum);
            }
            ++pos;
        }
        return ans;
    }
};

int main()
{
    string s = "abciiidef";
    int k = 3;
    string s2 = "aeiou";
    int k2 = 2;
    string s3 = "leetcode";
    int k3 = 3;
    string s4 = "rhythms";
    int k4 = 4;
    string s5 = "tryhard";
    int k5 = 4;

    Solution solution;
    cout << solution.maxVowels(s, k) << endl;
    cout << solution.maxVowels(s2, k2) << endl;
    cout << solution.maxVowels(s3, k3) << endl;
    cout << solution.maxVowels(s4, k4) << endl;
    cout << solution.maxVowels(s5, k5) << endl;
}
