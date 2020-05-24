// 4.25 night
#include <iostream>
#include <vector>
using namespace std;

#define FOR(x, to) for (x = 0; x < (to); x++)

class Solution
{
public:
    int maxScore_kmjp(vector<int> &cardPoints, int k)
    {
        int ma = 0;
        int i, j;
        int cur = 0;
        FOR(i, k)
        cur += cardPoints[i];
        ma = cur;
        for (i = 0, j = k - 1; i < k; i++, j--)
        {
            cur -= cardPoints[j];
            cur += cardPoints[cardPoints.size() - 1 - i];
            ma = max(ma, cur);
        }
        return ma;
    }

    ///////////////////////////////////////////////////////////////////////////////
    int maxScore_nhho(vector<int> &x, int k)
    {
        int n = x.size();
        vector<int> v(n + 1);
        for (int i = 0; i < n; i++)
            v[i + 1] = v[i] + x[i];
        int ans = 0;
        for (int i = 0; i <= k; i++)
            ans = max(ans, v[k - i] + v.back() - v[n - i]); // https://www.geeksforgeeks.org/vectorfront-vectorback-c-stl/
        return ans;
    }

    ///////////////////////////////////////////////////////////////////////////////
    int a[200010];
    int s[200010];
    int maxScore_newman1(vector<int> &f, int K)
    {
        int n = f.size();
        int i, j, p = 0, res = 0;
        for (i = n - 1; i >= 0; --i)
            a[++p] = f[i];
        for (i = n - 1; i >= 0; --i)
            a[++p] = f[i];
        s[0] = 0;
        for (i = 1; i <= n + n; ++i)
        {
            s[i] = s[i - 1] + a[i];
        }

        for (i = n; i <= n + K; ++i)
        {
            if (s[i] - s[i - K] > res)
                res = s[i] - s[i - K];
        }
        return res;
    }

    ///////////////////////////////////////////////////////////////////////////////
    template <typename T1, typename T2>
    inline void chmin(T1 &a, T2 b)
    {
        if (a > b)
            a = b;
    }
    template <typename T1, typename T2>
    inline void chmax(T1 &a, T2 b)
    {
        if (a < b)
            a = b;
    }

    int maxScore_beet(vector<int> &cs, int k)
    {
        using ll = long long;
        int n = cs.size();
        vector<ll> sm(n + 1, 0);
        for (int i = 0; i < n; i++)
            sm[i + 1] = sm[i] + cs[i];

        ll ans = 0;
        for (int i = 0; i + (n - k) <= n; i++)
            chmax(ans, sm[n] - (sm[i + (n - k)] - sm[i]));

        return (int)ans;
    }
};

int main()
{
    Solution s;

    vector<int> cardPoints;
    cardPoints.push_back(1);
    cardPoints.push_back(2);
    cardPoints.push_back(3);
    cardPoints.push_back(4);
    cardPoints.push_back(5);
    cardPoints.push_back(6);
    cardPoints.push_back(1);
    int k = 3;

    vector<int> cardPoints2;
    cardPoints2.push_back(2);
    cardPoints2.push_back(2);
    cardPoints2.push_back(2);
    int k2 = 2;

    vector<int> cardPoints3;
    cardPoints3.push_back(9);
    cardPoints3.push_back(7);
    cardPoints3.push_back(7);
    cardPoints3.push_back(9);
    cardPoints3.push_back(7);
    cardPoints3.push_back(7);
    cardPoints3.push_back(9);
    int k3 = 7;

    vector<int> cardPoints4;
    cardPoints4.push_back(1);
    cardPoints4.push_back(1000);
    cardPoints4.push_back(1);
    int k4 = 1;

    vector<int> cardPoints5;
    cardPoints5.push_back(1);
    cardPoints5.push_back(79);
    cardPoints5.push_back(80);
    cardPoints5.push_back(1);
    cardPoints5.push_back(1);
    cardPoints5.push_back(1);
    cardPoints5.push_back(200);
    cardPoints5.push_back(1);
    int k5 = 3;

    vector<int> debug1_cardPoints;
    debug1_cardPoints.push_back(100);
    debug1_cardPoints.push_back(40);
    debug1_cardPoints.push_back(17);
    debug1_cardPoints.push_back(9);
    debug1_cardPoints.push_back(73);
    debug1_cardPoints.push_back(75);
    int debug1_k = 3;

    cout << s.maxScore_kmjp(cardPoints, k) << endl;
    cout << s.maxScore_kmjp(cardPoints2, k2) << endl;
    cout << s.maxScore_kmjp(cardPoints3, k3) << endl;
    cout << s.maxScore_kmjp(cardPoints4, k4) << endl;
    cout << s.maxScore_kmjp(cardPoints5, k5) << endl;
    cout << s.maxScore_kmjp(debug1_cardPoints, debug1_k) << endl;

    cout << endl
         << endl
         << s.maxScore_nhho(cardPoints, k) << endl;
    cout << s.maxScore_nhho(cardPoints2, k2) << endl;
    cout << s.maxScore_nhho(cardPoints3, k3) << endl;
    cout << s.maxScore_nhho(cardPoints4, k4) << endl;
    cout << s.maxScore_nhho(cardPoints5, k5) << endl;
    cout << s.maxScore_nhho(debug1_cardPoints, debug1_k) << endl;

    cout << endl
         << endl
         << s.maxScore_newman1(cardPoints, k) << endl;
    cout << s.maxScore_newman1(cardPoints2, k2) << endl;
    cout << s.maxScore_newman1(cardPoints3, k3) << endl;
    cout << s.maxScore_newman1(cardPoints4, k4) << endl;
    cout << s.maxScore_newman1(cardPoints5, k5) << endl;
    cout << s.maxScore_newman1(debug1_cardPoints, debug1_k) << endl;

    cout << endl
         << endl
         << s.maxScore_beet(cardPoints, k) << endl;
    cout << s.maxScore_beet(cardPoints2, k2) << endl;
    cout << s.maxScore_beet(cardPoints3, k3) << endl;
    cout << s.maxScore_beet(cardPoints4, k4) << endl;
    cout << s.maxScore_beet(cardPoints5, k5) << endl;
    cout << s.maxScore_beet(debug1_cardPoints, debug1_k) << endl;
}
