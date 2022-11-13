// 7.26 night
#include <iostream>
#include <vector>
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

    int numSplits(string s)
    {
        vector<int> p(26), tot(26);
        // print(p);
        // print(tot);
        int l = 0, r = 0;
        for (char ch : s)
        {
            if (++tot[ch - 'a'] == 1)
            {
                ++r;
            }
        }
        // cout << "r is " << r << endl;
        int ans = 0;
        for (char ch : s)
        {
            if (++p[ch - 'a'] == 1)
            {
                ++l;
            }
            if (p[ch - 'a'] == tot[ch - 'a'])
            {
                --r;
            }
            if (l == r)
            {
                ++ans;
            }
        }
        return ans;
    }
};

int main()
{
    Solution so;
    string s = "aacaba";
    string s2 = "abcd";
    string s3 = "aaaaa";
    string s4 = "acbadbaada";

    cout << so.numSplits(s) << endl;
    // cout << so.numSplits(s2) << endl;
    // cout << so.numSplits(s3) << endl;
    // cout << so.numSplits(s4) << endl;
}