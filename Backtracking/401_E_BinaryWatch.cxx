// 5.20 evening
// https://www.cnblogs.com/grandyang/p/5896454.html
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

    vector<string> readBinaryWatch(int num)
    {
        vector<string> res;
        for (int h = 0; h < 12; ++h)
        {
            for (int m = 0; m < 60; ++m)
            {
                bitset<10> bs((h << 6) + m);
                // cout << bs << endl;
                if (bs.count() == num)
                {
                    res.push_back(to_string(h) + (m < 10 ? ":0" : ":") + to_string(m));
                }
            }
        }
        return res;
    }
};

int main()
{
    Solution s;
    int n = 1;

    s.print(s.readBinaryWatch(n));
}