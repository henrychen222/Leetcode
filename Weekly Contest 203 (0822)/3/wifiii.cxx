
// 8.23 evening
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution
{
public:
    static const int maxn = 100005;
    int par[maxn], sz[maxn], b[maxn];
    int find(int x)
    {
        return x == par[x] ? x : par[x] = find(par[x]);
    }
    int cnt[maxn];
    void merge(int x, int y)
    {
        int a = find(x), b = find(y);
        if (a != b)
        {
            cnt[sz[a]]--;
            cnt[sz[b]]--;
            par[a] = b;
            sz[b] += sz[a];
            cnt[sz[b]]++;
        }
    }

    int findLatestStep(vector<int> &a, int m)
    {
        int n = a.size();
        for (int i = 1; i <= n; ++i)
            par[i] = i, sz[i] = 1;
        int ret = 0, tp = 1;
        for (int i : a)
        {
            b[i] = 1;
            cnt[1]++;
            if (b[i - 1])
            {
                merge(i, i - 1);
            }
            if (b[i + 1])
            {
                merge(i, i + 1);
            }
            if (cnt[m])
                ret = tp;
            ++tp;
        }
        if (!ret)
            return -1;
        return ret;
    }
};

int main()
{
    Solution s;
    vector<int> arr = {3, 5, 1, 2, 4};
    int m = 1;
    vector<int> arr2 = {3, 1, 5, 4, 2};
    int m2 = 2;
    vector<int> arr3 = {1};
    int m3 = 1;
    vector<int> arr4 = {2, 1};
    int m4 = 2;
    cout << s.findLatestStep(arr, m) << endl;  // need to run seperately
    cout << s.findLatestStep(arr2, m2) << endl;
    cout << s.findLatestStep(arr3, m3) << endl;
    cout << s.findLatestStep(arr4, m4) << endl;
}