
/*
   03/06/21 evening night fixed c++ environment
   https://leetcode.com/contest/weekly-contest-231/problems/make-the-xor-of-all-segments-equal-to-zero/
 */

#include <iostream>
#include <vector>
#include <stdio.h> 
using namespace std;

class Solution
{
public:
    // https://www.geeksforgeeks.org/minimum-operations-make-xor-array-zero/
    int minChanges1(vector<int> &a, int k) {
        int n = a.size();
        int cost = INT_MAX;
        int element;
        int XOR = 0;
        for (int i = 0; i < n; i++) XOR ^= a[i];
        for (int i = 0; i < n; i++) {
            if (cost > abs((XOR ^ a[i]) - a[i])) {
                cost = abs((XOR ^ a[i]) - a[i]);
                element = a[i];
            }
        }
        return cost;
    }

    // https://www.tutorialspoint.com/xor-of-all-elements-of-array-with-set-bits-equal-to-k-in-cplusplus
    int minChanges2(vector<int> &a, int k) {
        vector<int> kBitElments;
        int n = sizeof(a) / sizeof(a[0]);
        for (int i = 0; i < n; i++) {
          if (__builtin_popcount(a[i]) == k) {
            kBitElments.push_back(a[i]);
          }
        }
        int result = 0;
        result = kBitElments[0];
        for (int i = 1; i < kBitElments.size(); i++) result ^= kBitElments[i];
        return result;
    }

    // https://www.geeksforgeeks.org/minimum-flips-in-a-binary-array-such-that-xor-of-consecutive-subarrays-of-size-k-have-different-parity/
    int minChanges(vector<int> &a, int k) {
        int n = a.size();
        bool set = false;
        int ans = 0, min_diff = INT_MAX;
        for (int i = 0; i < k; i++)
        {
            int curr_index = i, segment = 0, count_zero = 0, count_one = 0;
            while (curr_index < n) {
                if (segment % 2 == 0) {
                    if (a[curr_index] == 1) {
                        count_zero++;
                    } else {
                        count_one++;
                    }
                } else {
                    if (a[curr_index] == 0) {
                        count_zero++;
                    } else {
                        count_one++;
                    }
                }
                curr_index = curr_index + k;
                segment++;
            }
            ans += min(count_one, count_zero);
            if (count_one < count_zero) set = !set;
            min_diff = min(min_diff, abs(count_zero - count_one));
        }
        if (set) {
            return ans;
        } else {
            return ans + min_diff;
        }
    }
};

int main () {
    vector<int> nums {1, 2, 0, 3, 0}; int k = 1;
    vector<int> nums2 {3, 4, 5, 2, 1, 7, 3, 4, 7}; int k2 = 3;
    vector<int> nums3 {1, 2, 4, 1, 2, 5, 1, 2, 6}; int k3 = 3;
    Solution s;
    cout << s.minChanges(nums, k) << endl; // 3
    cout << s.minChanges(nums2, k2) << endl; // 3
    cout << s.minChanges(nums3, k3) << endl; // 3

    vector<int> a_test {2, 12, 44, 103, 17}; int k_test = 3;
    cout << s.minChanges2(nums, k) << endl; // 44
    return 0;
}