/** 
 * 12.31 night
 * https://leetcode.com/problems/brace-expansion-ii/
 */
#include <iostream>
#include <string>
#include <vector>
#include <unordered_set>
using namespace std;

class Solution
{
public:
    /**
     * Accepted --- 20 ms 14.1 MB 34.82%
     * https://www.codeleading.com/article/44372214329/
     */
    vector<string> braceExpansionII(string expression)
    {
        int pos = 0;
        unordered_set<string> strs = brace(expression, pos);
        vector<string> res(strs.begin(), strs.end());
        sort(res.begin(), res.end());
        return res;
    }

    unordered_set<string> brace(string &expression, int &pos)
    {
        unordered_set<string> res, prefixes;
        int len = expression.size();

        while (pos < len)
        {
            if (expression[pos] == '{')
            {
                pos++;
                unordered_set<string> words = brace(expression, pos);
                if (!prefixes.empty())
                {
                    str_multi(prefixes, words);
                }
                else
                    prefixes = words;
            }
            else if (expression[pos] == ',')
            {
                str_add(res, prefixes);
                prefixes.clear();
                pos++;
            }
            else if (expression[pos] >= 'a' && expression[pos] <= 'z')
            {
                string s = "";
                while (expression[pos] >= 'a' && expression[pos] <= 'z')
                {
                    s += expression[pos];
                    pos++;
                }

                if (!prefixes.empty())
                {
                    unordered_set<string> new_prefixes;
                    for (auto str : prefixes)
                        new_prefixes.insert(str + s);

                    prefixes = new_prefixes;
                }
                else
                    prefixes.insert(s);
            }
            else
            {
                pos++;
                break;
            }
        }

        str_add(res, prefixes);

        return res;
    }

    void str_multi(unordered_set<string> &prefixes, unordered_set<string> &words)
    {
        unordered_set<string> res;

        if (words.empty())
            return;

        for (auto prefix : prefixes)
        {
            for (auto word : words)
                res.insert(prefix + word);
        }

        prefixes = res;
    }

    void str_add(unordered_set<string> &res, unordered_set<string> &prefixes)
    {
        for (auto prefix : prefixes)
            res.insert(prefix);
    }

    void print(vector<string> const &input)
    {
        for (int i = 0; i < input.size(); i++)
        {
            cout << input.at(i) << ' ';
        }
        cout << endl;
    }
};

int main()
{
    Solution s;

    string expression1 = "{a,b}{c,{d,e}}";
    string expression2 = "{{a,z},a{b,c},{ab,z}}";
    s.print(s.braceExpansionII(expression1)); // ["ac","ad","ae","bc","bd","be"]
    s.print(s.braceExpansionII(expression2)); // ["a","ab","ac","z"]
}