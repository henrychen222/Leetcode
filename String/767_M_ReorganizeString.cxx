/**
 * 4.19 night
 * https://www.cnblogs.com/grandyang/p/8799483.html
 */
#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>
using namespace std;

class Solution
{
public:
    void printIntVector(vector<int> const &input)
    {
        for (int i = 0; i < input.size(); i++)
        {
            cout << input.at(i) << ' ';
        }
        cout << endl;
    }

    string reorganizeString(string S)
    {
        string res = "";
        unordered_map<char, int> m;
        priority_queue<pair<int, char>> q;
        for (char c : S)
            ++m[c];
        for (auto a : m)
        {
            if (a.second > (S.size() + 1) / 2)
                return "";
            q.push({a.second, a.first});
        }
        while (q.size() >= 2)
        {
            auto t1 = q.top();
            q.pop();
            auto t2 = q.top();
            q.pop();
            res.push_back(t1.second);
            res.push_back(t2.second);
            if (--t1.first > 0)
                q.push(t1);
            if (--t2.first > 0)
                q.push(t2);
        }
        if (q.size() > 0)
            res.push_back(q.top().second);
        return res;
    }

    string reorganizeString2(string S)
    {
        int n = S.size(), idx = 1;
        vector<int> cnt(26, 0);
        printIntVector(cnt);

        for (char c : S)
            cnt[c - 'a'] += 100;
        
        printIntVector(cnt);

        for (int i = 0; i < 26; ++i)
            cnt[i] += i;

        sort(cnt.begin(), cnt.end());
        printIntVector(cnt);

        for (int num : cnt)
        {
            int t = num / 100;
            char ch = 'a' + (num % 100);
            if (t > (n + 1) / 2)
                return "";
            for (int i = 0; i < t; ++i)
            {
                if (idx >= n)
                    idx = 0;
                S[idx] = ch;
                idx += 2;
            }
        }
        return S;
    }
};

int main()
{
    Solution s;
    string s1 = "aab";
    string s2 = "aaab";

    // cout << s.reorganizeString(s1) << endl; // "aba"
    // cout << s.reorganizeString(s2) << endl; // ""

    cout << s.reorganizeString2(s1) << endl;
    // cout << s.reorganizeString2(s2) << endl;
}