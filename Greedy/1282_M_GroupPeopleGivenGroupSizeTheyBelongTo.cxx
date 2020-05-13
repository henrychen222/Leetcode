#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution
{
public:
    vector<vector<int>> groupThePeople_cnblog(vector<int> &groupSizes)
    {

        vector<vector<int>> res;
        unordered_map<int, vector<int>> mp;
        for (int i = 0; i < groupSizes.size(); ++i)
        {
            mp[groupSizes[i]].push_back(i);
        }
        for (auto x : mp)
        {
            int i = x.first;          //i表示组的人数
            vector<int> v = x.second; //可以放在同一个组的所有人的编号
            vector<int> t(i);         //每i个人放一个组
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
}