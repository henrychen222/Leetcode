/**
 * 5.10 night 5.28 night debug
 * https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
 */
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution
{
public:
    // https://stackoverflow.com/questions/18362896/printing-the-vector-in-a-map
    void print_map(unordered_map<int, vector<int>> map)
    {
        for (auto it = map.begin(); it != map.end(); ++it)
        {
            cout << it->first << " : ";
            for (auto it2 = it->second.begin(); it2 != it->second.end(); ++it2)
                cout << *it2 << " ";
            cout << endl;
        }
    }

    void print(vector<int> const &input)
    {
        for (int i = 0; i < input.size(); i++)
        {
            cout << input.at(i) << ' ';
        }
        cout << endl;
    }

    // https://www.cnblogs.com/qinduanyinghua/p/12010648.html
    vector<vector<int>> groupThePeople_cnblog(vector<int> &groupSizes)
    {

        vector<vector<int>> res;
        unordered_map<int, vector<int>> mp;
        for (int i = 0; i < groupSizes.size(); ++i)
        {
            mp[groupSizes[i]].push_back(i);
        }
        print_map(mp);
        for (auto x : mp)
        {
            int i = x.first;          //i表示组的人数
            vector<int> v = x.second; //可以放在同一个组的所有人的编号
            vector<int> t(i);         //每i个人放一个组
            print(v);
            print(t);
            for (int j = 0; j < v.size(); ++j)
            {
                t[j % i] = v[j];
                if ((j + 1) % i == 0)
                {
                    res.push_back(t);
                }
            }
        }
        return res;
    }

    // https://blog.csdn.net/Eric_1993/article/details/105087187
    vector<vector<int>> groupThePeople_csdn(vector<int> &groupSizes)
    {
        unordered_map<int, vector<int>> group;
        vector<vector<int>> res;
        // 统计拥有相同 group size 的人有哪些
        for (int i = 0; i < groupSizes.size(); ++i)
            group[groupSizes[i]].push_back(i);
        for (auto &p : group)
        {
            auto gs = p.first;
            auto index = p.second;
            // 对于拥有相同 group size (gs) 的这些人, 他们的个数肯定是 gs 的整数倍
            // 那么我们就知道可以将这些人划分为 index.size() / gs 个 Group 了.
            for (int i = 0; i < index.size() / gs; ++i)
            {
                vector<int> tmp;
                std::copy(index.begin() + i * gs, index.begin() + (i + 1) * gs, back_inserter(tmp));
                res.push_back(tmp);
            }
        }
        return res;
    }

    // https://blog.csdn.net/reigns_/article/details/103506291
    vector<vector<int>> groupThePeople_csdn2(vector<int> &groupSizes)
    {
        int n = groupSizes.size();
        if (n == 0)
        {
            return {};
        }
        unordered_map<int, vector<int>> m;
        for (int i = 0; i < n; i++)
        {
            m[groupSizes[i]].push_back(i);
        }
        vector<vector<int>> res;
        for (auto it = m.begin(); it != m.end(); it++)
        {
            int cnt = 0;
            vector<int> tmp;
            for (int j = 0; j < it->second.size(); j++)
            {
                cnt++;
                tmp.push_back(it->second[j]);
                if (cnt == it->first)
                {
                    cnt = 0;
                    res.push_back(tmp);
                    tmp.clear();
                }
            }
        }
        return res;
    }
};

int main()
{
    Solution s;
    vector<int> groupSizes;
    groupSizes.push_back(3);
    groupSizes.push_back(3);
    groupSizes.push_back(3);
    groupSizes.push_back(3);
    groupSizes.push_back(3);
    groupSizes.push_back(1);
    groupSizes.push_back(3);

    s.groupThePeople_cnblog(groupSizes);
    s.groupThePeople_csdn(groupSizes);
    s.groupThePeople_csdn2(groupSizes);
}