/* 
12.28 evening 
https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/

run:
chmod 777 ./1247_M_MinimumSwapsMakeStringsEqual.sh (run at the first time)
./1247_M_MinimumSwapsMakeStringsEqual.sh
*/
#include <iostream>
#include <string>
using namespace std;

class Solution
{
public:
    // Accepted--- 4ms, 8.4MB, 58.31%
    int minimumSwap(string s1, string s2)
    {
        int xy = 0;
        int yx = 0;

        for (int i = 0; i < s1.length(); ++i)
        {
            if (s1[i] == 'x' && s2[i] == 'y')
            {
                ++xy;
            }
            if (s1[i] == 'y' && s2[i] == 'x')
            {
                ++yx;
            }
        }

        if ((xy + yx) % 2)
        {
            return -1;
        }

        return (xy + 1) / 2 + (yx + 1) / 2;
    }
};

int main()
{
    Solution s;

    string s1_one = "xx", s2_one = "yy";
    string s1_two = "xy", s2_two = "yx";
    string s1_three = "xx", s2_three = "xy";
    string s1_four = "xxyyxyxyxx", s2_four = "xyyxyxxxyx";

    cout << s.minimumSwap(s1_one, s2_one) << endl;     // 1
    cout << s.minimumSwap(s1_two, s2_two) << endl;     //2
    cout << s.minimumSwap(s1_three, s2_three) << endl; // -1
    cout << s.minimumSwap(s1_four, s2_four) << endl;   //4
}