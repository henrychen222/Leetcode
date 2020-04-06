/**
 * 4.5 night
 * https://www.cnblogs.com/grandyang/p/6660437.html
 */
#include <iostream>
using namespace std;

class Solution
{
public:
    // 0ms 6.2 MB 100%
    string complexNumberMultiply(string a, string b)
    {
        int n1 = a.size(), n2 = b.size();
        // cout << n1 << endl;
        // cout << n2 << endl;

        auto p1 = a.find_last_of("+");
        auto p2 = b.find_last_of("+");
        // cout << p1 << endl;
        // cout << p2 << endl;

        int a1 = stoi(a.substr(0, p1));
        int b1 = stoi(b.substr(0, p2));
        int a2 = stoi(a.substr(p1 + 1, n1 - p1 - 2)); // (1+1, 4-1-2)
        int b2 = stoi(b.substr(p2 + 1, n2 - p2 - 2));

        int r1 = a1 * b1 - a2 * b2, r2 = a1 * b2 + a2 * b1;

        // cout << "a1: " << a1 << endl;
        // cout << "b1: " << b1 << endl;
        // cout << "a2: " << a2 << endl;
        // cout << "b2: " << b2 << endl;

        return to_string(r1) + "+" + to_string(r2) + "i";
    }
};

int main()
{
    Solution s;
    string a = "1+1i";
    string b = "1+1i";
    
    // cout << a.substr(2,1) << endl;
    cout << s.complexNumberMultiply(a, b) << endl;

    return 0;
}