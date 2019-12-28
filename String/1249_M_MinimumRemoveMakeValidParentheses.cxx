/*
12.27 evening 
https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

run: 
chmod 777 1249_M_MinimumRemoveMakeValidParentheses.sh (first run need to execute)
./1249_M_MinimumRemoveMakeValidParentheses.sh
*/
#include <iostream>
#include <string>
#include <set>
#include <vector>
#include <boost/algorithm/string/predicate.hpp>
// #include <boost/algorithm/string.hpp>
using namespace std;

class Solution
{
public:
    // Accepted 24 ms, 13.2 MB, 94.36%
    string minRemoveToMakeValid(string s)
    {
        int close = count(begin(s), end(s), ')');
        int open = 0;
        string ans;

        for (char c : s)
        {
            if (c == '(')
            {
                if (open == close)
                {
                    open = close;
                    continue;
                }
                ++open;
            }
            else if (c == ')')
            {
                --close;
                if (open == 0)
                {
                    continue;
                }
                --open;
            }
            ans += c;
        }
        return ans;
    }
};

int main()
{
    Solution s;
    string s1 = "lee(t(c)o)de)";
    string s2 = "a)b(c)d";
    string s3 = "))((";
    string s4 = "(a(b(c)d)";

    cout << s.minRemoveToMakeValid(s1) << endl; // "lee(t(co)de)" OR "lee(t(c)o)de"
    cout << s.minRemoveToMakeValid(s2) << endl; // "ab(c)d"
    cout << s.minRemoveToMakeValid(s3) << endl; // ""
    cout << s.minRemoveToMakeValid(s4) << endl; // "(a(bc)d)" OR "a(b(c)d)"

    cout << endl << boost::equals(s.minRemoveToMakeValid(s1), "lee(t(c)o)de") << endl; // 1 equal
    cout << boost::equals(s.minRemoveToMakeValid(s2), "ab(c)d") << endl;       // 1 equal
    cout << boost::equals(s.minRemoveToMakeValid(s3), "") << endl;             // 1 equal
    cout << boost::equals(s.minRemoveToMakeValid(s4), "(a(bc)d)") << endl;     // 1 equal
}