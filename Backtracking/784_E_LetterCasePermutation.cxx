// 5.19 afternoon night
#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    void print(vector<string> const &input)
    {
        for (int i = 0; i < input.size(); i++)
        {
            cout << input.at(i) << ' ';
        }
        cout << endl;
    }

    vector<string> letterCasePermutation_cnblog(string S)
    {
        vector<string> res{""};
        for (char c : S)
        {
            int len = res.size();
            if (c >= '0' && c <= '9')
            {
                for (string &str : res)
                    str.push_back(c);
            }
            else
            {
                for (int i = 0; i < len; ++i)
                {
                    res.push_back(res[i]);
                    res[i].push_back(tolower(c));
                    res[len + i].push_back(toupper(c));
                }
            }
        }
        return res;
    }

    vector<string> letterCasePermutation_huahua(string S)
    {
        vector<string> ans;
        dfs(S, 0, ans);
        return ans;
    }

private:
    void dfs(string &S, int s, vector<string> &ans)
    {
        if (s == S.length())
        {
            ans.push_back(S);
            return;
        }
        // print(ans);
        dfs(S, s + 1, ans);
        if (!isalpha(S[s]))
            return;
        S[s] ^= 32;
        cout << S[s] << endl;
        dfs(S, s + 1, ans);
        S[s] ^= 32;
    }
};

int main()
{
    Solution s;
    string S = "a1b2";
    string S2 = "3z4";
    string S3 = "12345";

    s.print(s.letterCasePermutation_cnblog(S));
    // s.print(s.letterCasePermutation_cnblog(S2));
    // s.print(s.letterCasePermutation_cnblog(S3));

    cout << endl;
    s.print(s.letterCasePermutation_huahua(S));
    // s.print(s.letterCasePermutation_huahua(S2));
    // s.print(s.letterCasePermutation_huahua(S3));
}