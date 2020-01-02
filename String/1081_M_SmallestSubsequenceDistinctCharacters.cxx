/** 
 * created 12.31 night, did 1/1/2020
 * https://leetcode.com/problems/smallest-subsequence-of-distinct-characters
 */
#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <stack>
#include <set>
using namespace std;

class Solution
{
public:
    /**
     * Accepted --- 4ms 8.5 MB 69.06%
     * https://blog.csdn.net/burningdzb/article/details/91906660
    */
    string smallestSubsequence(string text)
    {
        string res = "";
        vector<int> count(26, 0); //记录26个字母在字符串的次数
        vector<int> used(26, 0);  //要让每个字母只使用1次

        for (int i = 0; i < text.size(); i++)
        {
            count[text[i] - 'a']++;
        }

        for (int i = 0; i < text.size(); i++)
        {
            count[text[i] - 'a']--;
            if (used[text[i] - 'a'])
                continue; //此字母使用过一次直接无视
            while (!res.empty() && res.back() > text[i] && count[res.back() - 'a'])
            {
                used[res.back() - 'a']--;
                res.pop_back();
            }
            res.push_back(text[i]);
            used[text[i] - 'a']++;
        }
        return res;
    }

    /**
     *  Accepted --- 4ms 8.9 MB  69.06%
     * https://www.acwing.com/solution/LeetCode/content/2467/
     */
    string smallestSubsequence2(string text)
    {
        unordered_map<char, int> num;
        stack<int> s;
        unordered_set<char> seen;

        for (auto &c : text)
            num[c]++;

        for (auto &c : text)
        {
            num[c]--;
            if (seen.find(c) != seen.end())
                continue;
            while (!s.empty() && s.top() > c && num[s.top()] > 0)
            {
                seen.erase(s.top());
                s.pop();
            }
            s.push(c);
            seen.insert(c);
        }

        string ret;
        while (!s.empty())
        {
            ret += s.top();
            s.pop();
        }
        reverse(ret.begin(), ret.end());
        return ret;
    }
};

int main()
{
    Solution s;
    string s1 = "cdadabcc";
    string s2 = "abcd";
    string s3 = "ecbacba";
    string s4 = "leetcode";

    cout << s.smallestSubsequence(s1) << endl; // "adbc"
    cout << s.smallestSubsequence(s2) << endl; // "abcd"
    cout << s.smallestSubsequence(s3) << endl; // "eacb"
    cout << s.smallestSubsequence(s4) << endl; // "letcod"

    cout << endl
         << s.smallestSubsequence2(s1) << endl;
    cout << s.smallestSubsequence2(s2) << endl;
    cout << s.smallestSubsequence2(s3) << endl;
    cout << s.smallestSubsequence2(s4) << endl;

    return 0;
}
