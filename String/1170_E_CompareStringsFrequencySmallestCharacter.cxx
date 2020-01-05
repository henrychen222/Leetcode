/**
 * 1.4 night
 * https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character
 */
#include <iostream>
#include <string>
#include <vector>
#include <numeric>
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

    /**
     * Accepted --- 16 ms 10.9 MB 97.44%
     * https://www.acwing.com/solution/LeetCode/content/4150/
     */
    vector<int> numSmallerByFrequency(vector<string> &queries, vector<string> &words)
    {
        vector<int> sum(12, 0);

        for (const auto &w : words)
            sum[calc_fre(w)]++;

        for (int i = 10; i >= 1; i--)
            sum[i] += sum[i + 1];

        int n = queries.size();
        vector<int> ans(n);
        for (int i = 0; i < n; i++)
            ans[i] = sum[calc_fre(queries[i]) + 1];

        return ans;
    }

    int calc_fre(const string &w)
    {
        int tot = 0;
        char min_c = w[0];
        for (auto c : w)
        {
            if (c < min_c)
            {
                min_c = c;
                tot = 1;
            }
            else if (c == min_c)
            {
                tot++;
            }
        }

        return tot;
    }

    /**
     * Accepted --- 48ms 14.6 MB 31.20%
     * https://blog.csdn.net/fuxuemingzhu/article/details/100179198
     */
    vector<int> numSmallerByFrequency2(vector<string> &queries, vector<string> &words)
    {
        vector<int> qs, ws;
        for (string &q : queries)
        {
            qs.push_back(getFrequency(q));
        }
        for (string &w : words)
        {
            ws.push_back(getFrequency(w));
        }
        vector<int> res;
        for (int q : qs)
        {
            int count = 0;
            for (int w : ws)
            {
                if (w > q)
                    count++;
            }
            res.push_back(count);
        }
        return res;
    }

    int getFrequency(string &word)
    {
        vector<int> counts(26, 0);
        for (char w : word)
        {
            counts[w - 'a']++;
        }
        for (int i = 0; i < 26; ++i)
        {
            if (counts[i] != 0)
                return counts[i];
        }
        return 0;
    }
};

int main()
{
    Solution s;

    vector<string> queries;
    vector<string> words;
    queries.push_back("cbd");
    words.push_back("zaaaz");

    vector<string> queries2;
    vector<string> words2;
    queries2.push_back("bbb");
    queries2.push_back("cc");
    words2.push_back("a");
    words2.push_back("aa");
    words2.push_back("aaa");
    words2.push_back("aaaaa");

    s.printIntVector(s.numSmallerByFrequency(queries, words));   //[1]
    s.printIntVector(s.numSmallerByFrequency(queries2, words2)); //[1,2]

    cout << endl;
    s.printIntVector(s.numSmallerByFrequency2(queries, words));   //[1]
    s.printIntVector(s.numSmallerByFrequency2(queries2, words2)); //[1,2]
}
