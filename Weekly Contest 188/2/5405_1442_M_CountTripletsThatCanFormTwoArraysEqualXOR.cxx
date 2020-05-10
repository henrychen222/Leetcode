/**
 * 5.9 night
 * https://leetcode.com/contest/weekly-contest-188/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/
 * https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/   Array
 */
#include <iostream>
#include <vector>
using namespace std;

// countTriplets_yubowenok
#define REP(i, s, t) for (int i = (s); i < (t); i++)
#define FILL(x, v) memset(x, v, sizeof(x))
#define MAXN 100005
int pre[MAXN];

class Solution
{
public:
    int countTriplets_kmjp(vector<int> &arr)
    {
        int ret = 0;
        int x, y, z;
        int N = arr.size();
        for (x = 0; x < N; x++)
        {
            int a = 0;
            for (y = x; y < N; y++)
            {
                a ^= arr[y];
                int b = 0;
                for (z = y + 1; z < N; z++)
                {
                    b ^= arr[z];
                    if (a == b)
                        ret++;
                }
            }
        }
        return ret;
    }

    int countTriplets_huzecong(vector<int> &arr)
    {
        vector<int> pre = {0};
        for (int i = 0; i < arr.size(); ++i)
            pre.push_back(pre[i] ^ arr[i]);
        int ans = 0;
        int n = arr.size();
        for (int i = 0; i < n; ++i)
            for (int j = i + 1; j < n; ++j)
                for (int k = j; k < n; ++k)
                {
                    int a = pre[j] ^ pre[i];
                    int b = pre[k + 1] ^ pre[j];
                    if (a == b)
                        ++ans;
                }
        return ans;
    }

    int countTriplets_liouzhou_101(vector<int> &a)
    {
        int n = a.size();
        vector<int> s(n + 1);
        for (int i = 1; i <= n; ++i)
            s[i] = s[i - 1] ^ a[i - 1];
        int ret = 0;
        for (int i = 1; i <= n; ++i)
            for (int j = i + 1; j <= n; ++j)
                for (int k = j; k <= n; ++k)
                {
                    if ((s[j - 1] ^ s[i - 1]) == (s[k] ^ s[j - 1]))
                        ret++;
                }
        return ret;
    }

    int countTriplets_LayCurse(vector<int> &A)
    {
        int i;
        int N = A.size();
        int res = 0;
        int s;
        for (i = (0); i < (N); i++)
        {
            int j;
            s = 0;
            for (j = (i); j < (N); j++)
            {
                s ^= A[j];
                if (s == 0)
                {
                    res += j - i;
                }
            }
        }
        return res;
    }

    int countTriplets_triplem5ds(vector<int> &arr)
    {
        int cnt = 0;
        for (int i = 0; i < arr.size(); i++)
        {
            int xr1 = 0;
            for (int j = i; j < arr.size(); j++)
            {
                xr1 ^= arr[j];
                int xr2 = 0;
                for (int k = j + 1; k < arr.size(); k++)
                {
                    xr2 ^= arr[k];
                    if (xr1 == xr2)
                        cnt++;
                }
            }
        }
        return cnt;
    }

    int countTriplets_raynor30(vector<int> &A)
    {
        int n = A.size();
        vector<vector<int>> V(n, vector<int>(n));
        for (int i = 0; i < n; ++i)
        {
            int a = A[i];
            for (int j = i + 1; j < n; ++j)
            {
                V[i][j - 1] = a;
                a ^= A[j];
            }
            V[i][n - 1] = a;
        }

        int ans = 0;
        for (int i = 0; i < n; ++i)
        {
            for (int j = i + 1; j < n; ++j)
            {
                int a = V[i][j - 1];
                for (int k = j; k < n; ++k)
                {
                    int b = V[j][k];
                    if (a == b)
                    {
                        ++ans;
                    }
                }
            }
        }
        return ans;
    }

    int countTriplets_wiji(vector<int> &arr)
    {
        int n = arr.size(), i, j, k, ans = 0;
        vector<int> s(n + 1);
        s[0] = 0;
        for (i = 0; i < n; i++)
            s[i + 1] = s[i] ^ arr[i];

        for (i = 0; i < n; i++)
        {
            for (j = i + 1; j < n; j++)
            {
                for (k = j; k < n; k++)
                    if ((s[j] ^ s[i]) == (s[k + 1] ^ s[j]))
                        ans++;
            }
        }
        return ans;
    }

    int countTriplets_zerotrac2(vector<int> &arr)
    {
        int n = arr.size();
        int ans = 0;
        for (int i = 0; i < n; ++i)
        {
            for (int j = i; j < n; ++j)
            {
                int tot = 0;
                for (int k = i; k <= j; ++k)
                {
                    tot ^= arr[k];
                }
                if (tot == 0)
                {
                    ans += j - i;
                }
            }
        }
        return ans;
    }

    /////////////////////////////////////////////////////////////////////////////
    int pref[305];
    int get(int l, int r)
    {
        int sum = pref[r];
        if (l)
            sum ^= pref[l - 1];
        return sum;
    }
    int countTriplets_Dragon_Fly_02(vector<int> &arr)
    {
        for (int i = 0; i < arr.size(); i++)
        {
            pref[i] = arr[i];
            if (i)
                pref[i] ^= pref[i - 1];
        }
        int ans = 0;
        for (int i = 0; i < arr.size(); i++)
        {
            for (int j = i + 1; j < arr.size(); j++)
            {
                for (int k = j; k < arr.size(); k++)
                {
                    int a = get(i, j - 1), b = get(j, k);
                    if (a == b)
                        ans++;
                }
            }
        }
        return ans;
    }

    int countTriplets_satanic0258(vector<int> &a)
    {
        int ans = 0;
        int n = a.size();
        for (int i = 0; i < n; ++i)
        {
            int l = a[i];
            for (int j = i + 1; j < n; ++j)
            {
                int r = a[j];
                for (int k = j + 1; k < n; ++k)
                {
                    if (l == r)
                        ++ans;
                    r ^= a[k];
                }
                if (l == r)
                    ++ans;
                l ^= a[j];
            }
        }
        return ans;
    }

    int countTriplets_suzyzhang(vector<int> &v)
    {
        int n = v.size(), ans = 0;

        for (int i = 0; i < n; ++i)
        {
            int a = v[i];
            for (int j = i + 1; j < n; ++j)
            {
                int b = 0;
                for (int k = j; k < n; ++k)
                {
                    b ^= v[k];
                    if (a == b)
                    {
                        ++ans;
                    }
                }
                a ^= v[j];
            }
        }
        return ans;
    }

    int countTriplets_nhho(vector<int> &arr)
    {
        vector<int> v(arr.size() + 1);
        for (int i = 0; i < arr.size(); i++)
            v[i + 1] = v[i] ^ arr[i];
        int ans = 0;
        for (int i = 0; i <= arr.size(); i++)
            for (int j = i + 1; j <= arr.size(); j++)
                if (v[i] == v[j])
                    ans += j - i - 1;
        return ans;
    }

    int countTriplets_yubowenok(vector<int> &arr)
    {
        int n = arr.size();
        FILL(pre, 0);
        REP(i, 0, n)
        {
            pre[i + 1] = pre[i] ^ arr[i];
        }
        int ans = 0;
        REP(i, 1, n + 1)
        {
            REP(j, i + 1, n + 1)
            {
                int a = pre[j - 1] ^ pre[i - 1];
                REP(k, j, n + 1)
                {
                    int b = pre[k] ^ pre[j - 1];
                    if (a == b)
                        ans++;
                }
            }
        }
        return ans;
    }

    int countTriplets_beet(vector<int> &arr)
    {
        int n = arr.size();
        vector<int> sm(n + 1, 0);
        for (int i = 0; i < n; i++)
            sm[i + 1] = sm[i] ^ arr[i];

        int ans = 0;
        for (int i = 0; i < n; i++)
        {
            for (int j = i + 1; j < n; j++)
            {
                for (int k = j; k < n; k++)
                {
                    // [i, j)
                    int a = sm[j] ^ sm[i];
                    // [j, k]
                    int b = sm[k + 1] ^ sm[j];
                    if (a == b)
                        ans++;
                }
            }
        }
        return ans;
    }

    int countTriplets_qpwoeirut(vector<int> &arr)
    {
        int a[300][300];
        for (int i = 0; i < arr.size(); i++)
        {
            for (int j = 0; j < arr.size(); j++)
            {
                a[i][j] = 0;
            }
        }

        for (int i = 0; i < arr.size(); i++)
        {
            int cur = 0;
            for (int j = i; j < arr.size(); j++)
            {
                cur ^= arr[j];
                a[i][j] = cur;
            }
        }

        int ans = 0;
        for (int i = 0; i < arr.size(); i++)
        {
            for (int j = i + 1; j < arr.size(); j++)
            {
                for (int k = j; k < arr.size(); k++)
                {
                    if (a[i][j - 1] == a[j][k])
                    {
                        ans++;
                    }
                }
            }
        }

        return ans;
    }
};

int main()
{
    Solution s;
    vector<int> arr;
    arr.push_back(2);
    arr.push_back(3);
    arr.push_back(1);
    arr.push_back(6);
    arr.push_back(7);

    vector<int> arr2;
    arr2.push_back(1);
    arr2.push_back(1);
    arr2.push_back(1);
    arr2.push_back(1);
    arr2.push_back(1);

    vector<int> arr3;
    arr3.push_back(2);
    arr3.push_back(3);

    vector<int> arr4;
    arr4.push_back(1);
    arr4.push_back(3);
    arr4.push_back(5);
    arr4.push_back(7);
    arr4.push_back(9);

    vector<int> arr5;
    arr5.push_back(7);
    arr5.push_back(11);
    arr5.push_back(12);
    arr5.push_back(9);
    arr5.push_back(5);
    arr5.push_back(2);
    arr5.push_back(7);
    arr5.push_back(17);
    arr5.push_back(22);

    cout << s.countTriplets_kmjp(arr) << endl;  // 4
    cout << s.countTriplets_kmjp(arr2) << endl; // 10
    cout << s.countTriplets_kmjp(arr3) << endl; // 0
    cout << s.countTriplets_kmjp(arr4) << endl; // 3
    cout << s.countTriplets_kmjp(arr5) << endl; // 8

    cout << endl
         << s.countTriplets_huzecong(arr) << endl;
    cout << s.countTriplets_huzecong(arr2) << endl;
    cout << s.countTriplets_huzecong(arr3) << endl;
    cout << s.countTriplets_huzecong(arr4) << endl;
    cout << s.countTriplets_huzecong(arr5) << endl;

    cout << endl
         << s.countTriplets_liouzhou_101(arr) << endl;
    cout << s.countTriplets_liouzhou_101(arr2) << endl;
    cout << s.countTriplets_liouzhou_101(arr3) << endl;
    cout << s.countTriplets_liouzhou_101(arr4) << endl;
    cout << s.countTriplets_liouzhou_101(arr5) << endl;

    cout << endl
         << s.countTriplets_LayCurse(arr) << endl;
    cout << s.countTriplets_LayCurse(arr2) << endl;
    cout << s.countTriplets_LayCurse(arr3) << endl;
    cout << s.countTriplets_LayCurse(arr4) << endl;
    cout << s.countTriplets_LayCurse(arr5) << endl;

    cout << endl
         << s.countTriplets_triplem5ds(arr) << endl;
    cout << s.countTriplets_triplem5ds(arr2) << endl;
    cout << s.countTriplets_triplem5ds(arr3) << endl;
    cout << s.countTriplets_triplem5ds(arr4) << endl;
    cout << s.countTriplets_triplem5ds(arr5) << endl;

    cout << endl
         << s.countTriplets_raynor30(arr) << endl;
    cout << s.countTriplets_raynor30(arr2) << endl;
    cout << s.countTriplets_raynor30(arr3) << endl;
    cout << s.countTriplets_raynor30(arr4) << endl;
    cout << s.countTriplets_raynor30(arr5) << endl;

    cout << endl
         << s.countTriplets_wiji(arr) << endl;
    cout << s.countTriplets_wiji(arr2) << endl;
    cout << s.countTriplets_wiji(arr3) << endl;
    cout << s.countTriplets_wiji(arr4) << endl;
    cout << s.countTriplets_wiji(arr5) << endl;

    cout << endl
         << s.countTriplets_zerotrac2(arr) << endl;
    cout << s.countTriplets_zerotrac2(arr2) << endl;
    cout << s.countTriplets_zerotrac2(arr3) << endl;
    cout << s.countTriplets_zerotrac2(arr4) << endl;
    cout << s.countTriplets_zerotrac2(arr5) << endl;

    cout << endl
         << s.countTriplets_Dragon_Fly_02(arr) << endl;
    cout << s.countTriplets_Dragon_Fly_02(arr2) << endl;
    cout << s.countTriplets_Dragon_Fly_02(arr3) << endl;
    cout << s.countTriplets_Dragon_Fly_02(arr4) << endl;
    cout << s.countTriplets_Dragon_Fly_02(arr5) << endl;

    cout << endl
         << s.countTriplets_satanic0258(arr) << endl;
    cout << s.countTriplets_satanic0258(arr2) << endl;
    cout << s.countTriplets_satanic0258(arr3) << endl;
    cout << s.countTriplets_satanic0258(arr4) << endl;
    cout << s.countTriplets_satanic0258(arr5) << endl;

    cout << endl
         << s.countTriplets_suzyzhang(arr) << endl;
    cout << s.countTriplets_suzyzhang(arr2) << endl;
    cout << s.countTriplets_suzyzhang(arr3) << endl;
    cout << s.countTriplets_suzyzhang(arr4) << endl;
    cout << s.countTriplets_suzyzhang(arr5) << endl;

    cout << endl
         << s.countTriplets_nhho(arr) << endl;
    cout << s.countTriplets_nhho(arr2) << endl;
    cout << s.countTriplets_nhho(arr3) << endl;
    cout << s.countTriplets_nhho(arr4) << endl;
    cout << s.countTriplets_nhho(arr5) << endl;

    cout << endl
         << s.countTriplets_yubowenok(arr) << endl;
    cout << s.countTriplets_yubowenok(arr2) << endl;
    cout << s.countTriplets_yubowenok(arr3) << endl;
    cout << s.countTriplets_yubowenok(arr4) << endl;
    cout << s.countTriplets_yubowenok(arr5) << endl;

    cout << endl
         << s.countTriplets_beet(arr) << endl;
    cout << s.countTriplets_beet(arr2) << endl;
    cout << s.countTriplets_beet(arr3) << endl;
    cout << s.countTriplets_beet(arr4) << endl;
    cout << s.countTriplets_beet(arr5) << endl;

    cout << endl
         << s.countTriplets_qpwoeirut(arr) << endl;
    cout << s.countTriplets_qpwoeirut(arr2) << endl;
    cout << s.countTriplets_qpwoeirut(arr3) << endl;
    cout << s.countTriplets_qpwoeirut(arr4) << endl;
    cout << s.countTriplets_qpwoeirut(arr5) << endl;
}