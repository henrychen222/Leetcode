/**
 * 4.4 night
 * https://www.cnblogs.com/grandyang/p/6568398.html
 */
#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    // 188 ms 9.3 MB 5.21% (keep the print)
    // 36 ms 9.6 MB 18.01% (comment the print)
    int findMinDifference(vector<string> &timePoints)
    {
        int res = INT_MAX, n = timePoints.size(), diff = 0;
        sort(timePoints.begin(), timePoints.end());
        for (int i = 0; i < n; ++i)
        {
            string t1 = timePoints[i], t2 = timePoints[(i + 1) % n];
            // cout << "t1 is: " << t1 << endl;
            // cout << "t2 is: " << t2 << endl;

            int h1 = (t1[0] - '0') * 10 + t1[1] - '0';
            int m1 = (t1[3] - '0') * 10 + t1[4] - '0';
            int h2 = (t2[0] - '0') * 10 + t2[1] - '0';
            int m2 = (t2[3] - '0') * 10 + t2[4] - '0';

            // cout << "t2[0] is: " << t2[0] << endl;
            // cout << "t2[1] is: " << t2[1] << endl;
            // cout << "t2[3] is: " << t2[3] << endl;
            // cout << "t2[4] is: " << t2[4] << endl;

            // cout << "t2[0] - '0' is: " << t2[0] - '0' << endl;
            // cout << "t2[1] - '0' is: " << t2[1] - '0' << endl;
            // cout << "t2[3] - '0' is: " << t2[3] - '0' << endl;
            // cout << "t2[4] - '0' is: " << t2[4] - '0' << endl;

            // cout << "h1 is: " << h1 << endl;
            // cout << "m1 is: " << m1 << endl;
            // cout << "h2 is: " << h2 << endl;
            // cout << "m2 is: " << m2 << endl;

            diff = (h2 - h1) * 60 + (m2 - m1);
            if (i == n - 1)
                diff += 24 * 60;
            res = min(res, diff);
        }
        return res;
    }
};

int main()
{

    Solution s;
    vector<string> timePoints;
    timePoints.push_back("23:59");
    timePoints.push_back("00:00");
    cout << s.findMinDifference(timePoints) << endl; // 1

    vector<string> timePoints2;
    timePoints2.push_back("23:59");
    timePoints2.push_back("22:58");
    cout << s.findMinDifference(timePoints2) << endl; // 61

    return 0;
}