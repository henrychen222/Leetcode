// 5.26 night
// https://www.cnblogs.com/grandyang/p/7776979.html
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

    int maxProfit(vector<int> &prices, int fee)
    {
        vector<int> sold(prices.size(), 0), hold = sold;
        hold[0] = -prices[0];
        // print(sold);
        // print(hold);
        for (int i = 1; i < prices.size(); ++i)
        {
            sold[i] = max(sold[i - 1], hold[i - 1] + prices[i] - fee);
            hold[i] = max(hold[i - 1], sold[i - 1] - prices[i]);
        }
        // print(sold);
        return sold.back();
    }
};

int main()
{
    vector<int> prices{1, 3, 2, 8, 4, 9};
    int fee = 2;

    Solution s;
    cout << s.maxProfit(prices, fee) << endl;
}