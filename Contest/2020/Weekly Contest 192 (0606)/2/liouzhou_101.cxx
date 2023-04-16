// 6.6 night
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

    vector<int> getStrongest(vector<int> &a, int k)
    {
        int n = a.size();
        vector<int> b = a;
        sort(b.begin(), b.end());
        print(b);

        int m = b[(n - 1) / 2];
        cout << m << endl;

        vector<int> p(n);
        for (int i = 0; i < n; ++i)
            p[i] = i;
        print(p);

        sort(p.begin(), p.end(), [&](int i, int j) {
            return abs(a[i] - m) > abs(a[j] - m) || abs(a[i] - m) == abs(a[j] - m) && a[i] > a[j];
        });
        print(p);

        vector<int> ret;
        for (int i = 0; i < k; ++i)
            ret.push_back(a[p[i]]);
        return ret;
    }
};

int main()
{
    Solution s;
    vector<int> arr{1, 2, 3, 4, 5};
    int k = 2;
    vector<int> arr2{1, 1, 3, 5, 5};
    int k2 = 2;
    vector<int> arr3{6, 7, 11, 7, 6, 8};
    int k3 = 5;
    vector<int> arr4{6, -3, 7, 2, 11};
    int k4 = 3;
    vector<int> arr5{-7, 22, 17, 3};
    int k5 = 2;

    s.print(s.getStrongest(arr, k));
    // s.print(s.getStrongest(arr2, k2));
    // s.print(s.getStrongest(arr3, k3));
    // s.print(s.getStrongest(arr4, k4));
    // s.print(s.getStrongest(arr5, k5));
}
