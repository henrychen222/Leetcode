/*
9.26 afternoon 9.26 evening
*/
#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

class Solution
{
public:
    int maxNumberOfBalloons(string text)
    {
        unordered_map<char, int> mp;
        for (auto it : text)
        {
            if (it == 'a' || it == 'b' || it == 'l' || it == 'o' || it == 'n')
                mp[it]++;
        }
        int s = min(mp['a'], min(mp['b'], mp['n'])), d = min(mp['l'], mp['o']);
        if (d >= 2 * s)
            return s;
        return d / 2;
    }
};

int main()
{
    Solution s;
    string text1 = "nlaebolko";
    string text2 = "loonbalxballpoon";
    string text3 = "leetcode";
    cout << s.maxNumberOfBalloons(text1) << endl;
    cout << s.maxNumberOfBalloons(text2) << endl;
    cout << s.maxNumberOfBalloons(text3) << endl;
    return 0;
}