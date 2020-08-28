// 8.27 night
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution
{
public:
    void print_map(unordered_map<int, int> map)
    {
        for (const auto &p : map)
            cout << "map[" << p.first << "] = " << p.second << '\n';
    }

    int subarraysDivByK(vector<int> &A, int K)
    {
        unordered_map<int, int> m;
        int preSum = 0;
        int res = 0;
        m[0] = 1;
        for (int a : A)
        {
            preSum = (preSum + a) % K;
            if (preSum < 0)
                preSum += K;
            res += m[preSum]++;
            // cout << preSum << m[preSum] << endl;
        }
        // print_map(m);
        return res;
    }
};

int main()
{
    Solution s;
    vector<int> A = {4, 5, 0, -2, -3, 1};
    int K = 5;
    cout << s.subarraysDivByK(A, K) << endl;
}