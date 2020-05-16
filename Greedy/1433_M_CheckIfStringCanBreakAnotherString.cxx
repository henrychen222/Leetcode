// 5.15 night
// https://www.acwing.com/file_system/file/content/whole/index/content/513389/
#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    void csort(string &s)
    {
        int n = s.size();
        vector<int> c(26, 0);
        for (int i = 0; i < n; i++)
            c[s[i] - 'a']++;
        for (int i = 25; i >= 0; i--)
            while (c[i]--)
                s[--n] = i + 'a';
    }

    bool checkIfCanBreak(string s1, string s2)
    {
        csort(s1);
        csort(s2);
        // cout << s1 << endl;
        // cout << s2 << endl;
        int n = s1.size();
        bool f1 = true, f2 = true;
        for (int i = 0; i < n; i++)
            if (s1[i] < s2[i])
                f1 = false;
            else if (s1[i] > s2[i])
                f2 = false;
        return f1 || f2;
    }
};

int main()
{
    Solution s;
    string s1 = "abc",
           s2 = "xya";
    string s1_example2 = "abe",
           s2_example2 = "acd";
    string s1_example3 = "leetcodee",
           s2_example3 = "interview";

    cout << s.checkIfCanBreak(s1, s2) << endl;
    cout << s.checkIfCanBreak(s1_example2, s2_example2) << endl;
    cout << s.checkIfCanBreak(s1_example3, s2_example3) << endl;
}