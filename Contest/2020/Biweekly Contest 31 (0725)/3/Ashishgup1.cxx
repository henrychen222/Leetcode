// 7.26 night
#include <iostream>
#include <vector>
#include <map>
using namespace std;

class Solution {
public:
    void print_map(map<char, int> map)
    {
        for (const auto &p : map)
            cout << "map[" << p.first << "] = " << p.second << '\n';
    }

    int numSplits(string s) {
        map<char, int> l, r;
        for(auto &it:s)
            r[it]++;
        // print_map(r);
        int ans = 0;
        for(auto &it:s)
        {
            l[it]++;
            r[it]--;
            if(r[it] == 0)
                r.erase(it);
            if(l.size() == r.size())
                ans++;
        }
        // print_map(l);
        // print_map(r);
        return ans;
    }
};

int main()
{
    Solution so;
    string s = "aacaba";
    string s2 = "abcd";
    string s3 = "aaaaa";
    string s4 = "acbadbaada";

    cout << so.numSplits(s) << endl;
    // cout << so.numSplits(s2) << endl;
    // cout << so.numSplits(s3) << endl;
    // cout << so.numSplits(s4) << endl;
}