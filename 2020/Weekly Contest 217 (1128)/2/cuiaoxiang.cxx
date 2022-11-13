// 11.28 evening
#include <iostream>
#include <set>
#include <vector>
using namespace std;

typedef pair<int, int> ii;
class Solution
{
public:
    void print_set_pair(set<ii> A)
    {
        for (auto const &var : A)
        {
            cout << "(" << var.first << ", " << var.second << ")"
                 << " ";
        }
        cout << endl;
    }

    void print(vector<int> const &input)
    {
        for (int i = 0; i < input.size(); i++)
        {
            cout << input.at(i) << ' ';
        }
        cout << endl;
    }

    vector<int> mostCompetitive(vector<int> &a, int m)
    {
        int n = a.size();
        vector<int> ret;
        set<ii> A;
        for (int i = 0; i + m < n; ++i)
            A.insert({a[i], i});
        print_set_pair(A);
        int last = -1;
        for (int i = n - m; i < n; ++i)
        {
            A.insert({a[i], i});
            print_set_pair(A); // why sorted?
            cout << last << endl;
            while (A.size() && A.begin()->second < last)
            {
                A.erase(A.begin());
            }
            auto it = A.begin();
            ret.push_back(it->first);
            last = it->second;
            A.erase(it);
        }
        return ret;
    }
};

int main()
{
    Solution s;
    vector<int> nums{3, 5, 2, 6};
    int k = 2;
    vector<int> nums2{2, 4, 3, 3, 5, 4, 9, 6};
    int k2 = 4;
    vector<int> nums_debug1{84, 10, 71, 23, 66, 61, 62, 64, 34, 41, 80, 25, 91, 43, 4, 75, 65, 13, 37, 41, 46, 90, 55, 8, 85, 61, 95, 71};
    int k_debug1 = 24;
    vector<int> nums_debug2{71, 18, 52, 29, 55, 73, 24, 42, 66, 8, 80, 2};
    int k_debug2 = 3;
    // s.print(s.mostCompetitive(nums, k));
    s.print(s.mostCompetitive(nums2, k2));
    // s.print(s.mostCompetitive(nums_debug1, k_debug1));
    // s.print(s.mostCompetitive(nums_debug2, k_debug2));


}