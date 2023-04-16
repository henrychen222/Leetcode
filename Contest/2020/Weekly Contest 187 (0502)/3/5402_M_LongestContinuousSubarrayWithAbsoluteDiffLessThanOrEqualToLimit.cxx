// 5.2 night
#include <iostream>
#include <set>
#include <vector>
#include <map>
#include <queue>
using namespace std;

#define FOR(x, to) for (x = 0; x < (to); x++)

class Solution
{
public:
    // Accepted --- 732ms 100.9MB 5.03%
    int longestSubarray_fmota(vector<int> &nums, int limit)
    {
        multiset<int> cur;
        int n = nums.size();
        int ans = 0;
        for (int i = 0, j = 0; i < n; i++)
        {
            while (j < n)
            {
                if (cur.empty())
                    cur.insert(nums[j++]);
                else
                {
                    auto p = *cur.begin();
                    auto q = *prev(cur.end());
                    if (abs(p - q) <= limit)
                        cur.insert(nums[j++]);
                    else
                        break;
                }
            }
            if (!cur.empty())
            {
                auto p = *cur.begin();
                auto q = *prev(cur.end());
                if (abs(p - q) > limit)
                    cur.erase(cur.find(nums[--j]));
            }
            ans = max(ans, (int)cur.size());
            cur.erase(cur.find(nums[i]));
        }
        return ans;
    }

    // Accepted --- 432ms 78.4MB 16.94%
    int longestSubarray_kmjp(vector<int> &nums, int limit)
    {
        int ret = 1;
        multiset<int> S;
        int pre = 0, L;
        FOR(L, nums.size())
        {
            S.insert(nums[L]);
            while (*S.rbegin() - *S.begin() > limit)
            {
                S.erase(S.find(nums[pre++]));
            }
            ret = max(ret, L - pre + 1);
        }
        return ret;
    }

    /////////////////////////////////////////////////////////////////////////////////////
    // Accepted --- 688ms 100.8MB 5.03%
    int getLo(multiset<int> &x)
    {
        return *x.begin();
    }
    int getHi(multiset<int> &x)
    {
        auto it = x.end();
        --it;
        return *it;
    }
    int longestSubarray_sheepforever(vector<int> &nums, int limit)
    {
        multiset<int> cur;
        int j = 0, ans = 0;
        for (int i = 0; i < nums.size(); ++i)
        {
            while (j < nums.size())
            {
                cur.insert(nums[j]);
                if (getHi(cur) - getLo(cur) <= limit)
                {
                    ++j;
                    continue;
                }
                else
                {
                    cur.erase(cur.find(nums[j]));
                    break;
                }
            }
            ans = max(ans, j - i);
            cur.erase(cur.find(nums[i]));
        }
        return ans;
    }

    /////////////////////////////////////////////////////////////////////////////////////
    // Accepted --- 464ms 78.6 MB 12.22%
    int longestSubarray_superluminal(vector<int> &nums, int limit)
    {
        multiset<int> w;
        int r = 0, j = 0, n = nums.size();
        for (int i = 0; i < n; ++i)
        {
            w.insert(nums[i]);
            while (!w.empty() && *w.rbegin() - *w.begin() > limit)
            {
                w.erase(w.find(nums[j++]));
            }
            r = max(r, 1 + i - j);
        }
        return r;
    }

    // Accepted --- 700ms 100.7MB 5.03%
    int longestSubarray_dancooper(vector<int> &A, int limit)
    {
        int n = A.size();
        int max_len = 0;
        multiset<int> S;
        int j = 0;
        for (int i = 0; i < n; i++)
        {
            while (j < n)
            {
                S.insert(A[j]);
                int max_val = *S.rbegin();
                int min_val = *S.begin();
                if (max_val - min_val > limit)
                {
                    S.erase(S.find(A[j]));
                    break;
                }
                j++;
            }
            int len = j - i;
            max_len = max(max_len, len);
            S.erase(S.find(A[i]));
        }
        return max_len;
    }

    // Accepted --- 556 ms 78.5 MB 7.56%
    int longestSubarray_wiji(vector<int> &nums, int limit)
    {
        int n = nums.size(), i, j, k, c = 0;
        set<pair<int, int>> s;
        int ans = 0;
        for (i = 0; i < n; i++)
        {
            s.insert({nums[i], i});
            while ((s.size() > 1) && (abs(s.rbegin()->first - s.begin()->first) > limit))
            {
                s.erase({nums[c], c});
                c++;
            }
            ans = max(ans, (int)s.size());
        }
        return ans;
    }

    // Accepted --- 676ms 100.7MB 5.09%
    int longestSubarray_Heltion(vector<int> &nums, int limit)
    {
        int n = nums.size(), ans = 0;
        multiset<int> ms;
        for (int L = 0, R = 0; L < n; L += 1)
        {
            while (R < n)
            {
                ms.insert(nums[R]);
                if (*ms.rbegin() - *ms.begin() > limit)
                {
                    ms.erase(ms.find(nums[R]));
                    break;
                }
                R += 1;
            }
            ans = max(R - L, ans);
            ms.erase(ms.find(nums[L]));
        }
        return ans;
    }

    // Accepted --- 488ms 78.5MB 10.43%
    int longestSubarray_zerotrac2(vector<int> &nums, int limit)
    {
        multiset<int> s;
        int n = nums.size();
        int r = -1;
        int ans = 0;
        for (int i = 0; i < n; ++i)
        {
            if (i != 0)
            {
                s.erase(s.find(nums[i - 1]));
            }
            while (r + 1 < n && (s.empty() || max(*s.rbegin(), nums[r + 1]) - min(*s.begin(), nums[r + 1]) <= limit))
            {
                s.insert(nums[r + 1]);
                ++r;
            }
            ans = max(ans, r - i + 1);
        }
        return ans;
    }

    // Accepted --- 360ms 62.8MB 25.99%
    int longestSubarray_lympanda(vector<int> &nums, int limit)
    {
        map<int, int> mp;
        mp.clear();
        int i, n, mi, ma, st, ans;
        n = nums.size();
        st = 0;
        ans = 1;
        for (i = 0; i < n; i++)
        {
            mp[nums[i]]++;
            mi = mp.begin()->first;
            map<int, int>::iterator tmp = mp.end();
            tmp--;
            ma = tmp->first;
            if (ma - mi <= limit)
            {
                if (i - st + 1 > ans)
                    ans = i - st + 1;
            }
            else
            {
                while (ma - mi > limit)
                {
                    mp[nums[st]]--;
                    if (mp[nums[st]] == 0)
                        mp.erase(nums[st]);
                    mi = mp.begin()->first;
                    map<int, int>::iterator tmp = mp.end();
                    tmp--;
                    ma = tmp->first;
                    st++;
                }
            }
        }
        return ans;
    }

    // Accepted --- 772ms 58.3 MB 5.03%
    int longestSubarray_nhho(vector<int> &v, int limit)
    {
        int ans = 0;
        priority_queue<pair<int, int>> qa;
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> qb;
        for (int i = 0, la = 0; i < v.size(); i++)
        {
            qa.emplace(v[i], i);
            qb.emplace(v[i], i);
            while (1)
            {
                if (qa.top().second < la)
                {
                    qa.pop();
                    continue;
                }
                if (qb.top().second < la)
                {
                    qb.pop();
                    continue;
                }
                if (qa.top().first - qb.top().first > limit)
                {
                    la++;
                    continue;
                }
                break;
            }
            ans = max(ans, i - la + 1);
        }
        return ans;
    }

    // Acccepted --- 540ms 78.6MB 7.90%
    int longestSubarray_piyifan(vector<int> &nums, int limit)
    {
        set<pair<int, int>> f;
        int ans = 1;
        int last = -1;
        for (int i = 0; i < nums.size(); i++)
        {
            if (last == -1)
                last = i;
            f.insert(make_pair(nums[i], i));
            while ((*f.rbegin()).first - (*f.begin()).first > limit)
            {
                f.erase(make_pair(nums[last], last));
                last++;
            }
            ans = max(i - last + 1, ans);
        }

        return ans;
    }

    // Accepted --- 252ms 57.1MB 40.25%
    int longestSubarray_ericlong(vector<int> &nums, int limit)
    {
        int l = 0;
        deque<pair<int, int>> mx, mn;
        mx.push_back({nums[0], 0});
        mn.push_back({nums[0], 0});
        int ans = 1;
        for (int i = 1; i < nums.size(); i++)
        {
            while (!mx.empty() && nums[i] > mx.front().first)
                mx.pop_front();
            mx.push_front({nums[i], i});
            while (!mn.empty() && nums[i] < mn.front().first)
                mn.pop_front();
            mn.push_front({nums[i], i});
            while (mx.back().first - mn.back().first > limit)
            {
                if (mx.back().second == l)
                {
                    mx.pop_back();
                }
                if (mn.back().second == l)
                {
                    mn.pop_back();
                }
                l++;
            }
            ans = max(ans, i - l + 1);
        }
        return ans;
    }
};

int main()
{
    Solution s;

    vector<int> nums;
    nums.push_back(8);
    nums.push_back(2);
    nums.push_back(4);
    nums.push_back(7);
    int limit = 4;

    vector<int> nums2;
    nums2.push_back(10);
    nums2.push_back(1);
    nums2.push_back(2);
    nums2.push_back(4);
    nums2.push_back(7);
    nums2.push_back(2);
    int limit2 = 5;

    vector<int> nums3;
    nums3.push_back(4);
    nums3.push_back(2);
    nums3.push_back(2);
    nums3.push_back(2);
    nums3.push_back(4);
    nums3.push_back(4);
    nums3.push_back(2);
    nums3.push_back(2);
    int limit3 = 0;

    cout << s.longestSubarray_fmota(nums, limit) << endl;   // 2
    cout << s.longestSubarray_fmota(nums2, limit2) << endl; // 4
    cout << s.longestSubarray_fmota(nums3, limit3) << endl; // 3

    cout << endl
         << s.longestSubarray_kmjp(nums, limit) << endl;
    cout << s.longestSubarray_kmjp(nums2, limit2) << endl;
    cout << s.longestSubarray_kmjp(nums3, limit3) << endl;

    cout << endl
         << s.longestSubarray_sheepforever(nums, limit) << endl;
    cout << s.longestSubarray_sheepforever(nums2, limit2) << endl;
    cout << s.longestSubarray_sheepforever(nums3, limit3) << endl;

    cout << endl
         << s.longestSubarray_superluminal(nums, limit) << endl;
    cout << s.longestSubarray_superluminal(nums2, limit2) << endl;
    cout << s.longestSubarray_superluminal(nums3, limit3) << endl;

    cout << endl
         << s.longestSubarray_dancooper(nums, limit) << endl;
    cout << s.longestSubarray_dancooper(nums2, limit2) << endl;
    cout << s.longestSubarray_dancooper(nums3, limit3) << endl;

    cout << endl
         << s.longestSubarray_wiji(nums, limit) << endl;
    cout << s.longestSubarray_wiji(nums2, limit2) << endl;
    cout << s.longestSubarray_wiji(nums3, limit3) << endl;

    cout << endl
         << s.longestSubarray_Heltion(nums, limit) << endl;
    cout << s.longestSubarray_Heltion(nums2, limit2) << endl;
    cout << s.longestSubarray_Heltion(nums3, limit3) << endl;

    cout << endl
         << s.longestSubarray_zerotrac2(nums, limit) << endl;
    cout << s.longestSubarray_zerotrac2(nums2, limit2) << endl;
    cout << s.longestSubarray_zerotrac2(nums3, limit3) << endl;

    cout << endl
         << s.longestSubarray_lympanda(nums, limit) << endl;
    cout << s.longestSubarray_lympanda(nums2, limit2) << endl;
    cout << s.longestSubarray_lympanda(nums3, limit3) << endl;

    cout << endl
         << s.longestSubarray_nhho(nums, limit) << endl;
    cout << s.longestSubarray_nhho(nums2, limit2) << endl;
    cout << s.longestSubarray_nhho(nums3, limit3) << endl;

    cout << endl
         << s.longestSubarray_piyifan(nums, limit) << endl;
    cout << s.longestSubarray_piyifan(nums2, limit2) << endl;
    cout << s.longestSubarray_piyifan(nums3, limit3) << endl;

    cout << endl
         << s.longestSubarray_ericlong(nums, limit) << endl;
    cout << s.longestSubarray_ericlong(nums2, limit2) << endl;
    cout << s.longestSubarray_ericlong(nums3, limit3) << endl;
}