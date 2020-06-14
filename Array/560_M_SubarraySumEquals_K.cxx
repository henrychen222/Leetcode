#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution
{
public:
    void print_map(unordered_map<int, int> map)
    {
        for (const auto &p : map)
            cout << "map[" << p.first << "] = " << p.second << '\n';
    }

    void print(vector<int> const &input)
    {
        for (int i = 0; i < input.size(); i++)
        {
            cout << input.at(i) << ' ';
        }
        cout << endl;
    }

    int subarraySum(vector<int> &nums, int k)
    {
        unordered_map<int, int> map;
        int sum = 0;
        int cnt = 0;
        map[0] = 1;
        // print_map(map);
        for (int i = 0; i < nums.size(); i++)
        {
            sum += nums[i];
            if (map.find(sum - k) != map.end())
            {
                cnt += map[sum - k];
                cout << cnt << endl;
            }
            map[sum]++;
        }
        cout << endl;
        print_map(map);
        return cnt;
    }
};

int main()
{
    Solution s;
    vector<int> nums{1, 1, 1};
    int k = 2;
    vector<int> nums2{1, 2, 3};
    int k2 = 3;
    cout << s.subarraySum(nums, k) << endl;
    // cout << s.subarraySum(nums2, k2) << endl;
}
