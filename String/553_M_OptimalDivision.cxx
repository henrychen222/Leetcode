/**
 * 4.2 evening
 * https://leetcode.com/problems/optimal-division/
 * 
 * https://blog.csdn.net/u010150046/article/details/75091201
 */
#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    // 0 ms 6.3MB 100%
    string optimalDivision(vector<int> &nums)
    {
        if (nums.size() == 0)
            return "";
        if (nums.size() == 1)
            return to_string(nums[0]);
        if (nums.size() == 2)
            return to_string(nums[0]) + "/" + to_string(nums[1]);
        string res = to_string(nums[0]) + "/";
        string tmp = to_string(nums[1]);
        for (int i = 2; i < nums.size(); i++)
        {
            tmp += "/" + to_string(nums[i]);
        }
        return res + "(" + tmp + ")";
    }
};

int main()
{

    Solution s;
    vector<int> input;
    input.push_back(1000);
    input.push_back(100);
    input.push_back(10);
    input.push_back(2);
    cout << s.optimalDivision(input) << endl;

    vector<int> input2;
    input2.push_back(3);
    input2.push_back(2);
    cout << s.optimalDivision(input2) << endl;

    return 0;
}