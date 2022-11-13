// 10.3 afternoon
#include <iostream>
#include <vector>
#include <map>
using namespace std;

#define FOR(x, to) for (x = 0; x < (to); x++)
#define FORR(x, arr) for (auto &x : arr)
#define ALL(a) (a.begin()), (a.end())

class Solution
{
public:
    // Accepted --- 472ms
    vector<string> alertNames(vector<string> &keyName, vector<string> &keyTime)
    {
        map<string, vector<int>> V;
        int i;
        FOR(i, keyName.size())
        {
            int tim = ((keyTime[i][0] - '1') * 10 + (keyTime[i][1] - '1') * 1) * 60 + ((keyTime[i][3] - '1') * 10 + (keyTime[i][4] - '1') * 1);
            V[keyName[i]].push_back(tim);
        }
        print_mapVectors(V);
        vector<string> ret;
        FORR(a, V)
        {
            int ng = 0;
            int i;
            vector<int> B = a.second;
            sort(ALL(B));
            print(B);
            for (i = 0; i + 2 < B.size(); i++)
                if (B[i + 2] - B[i] <= 60)
                    ng = 1;
            if (ng)
                ret.push_back(a.first);
        }
        return ret;
    }

    void print(vector<int> &input)
    {
        for (int i = 0; i < input.size(); i++)
        {
            cout << input.at(i) << ' ';
        }
        cout << endl;
    }

    void print_mapVectors(map<string, vector<int>> map)
    {
        for (const auto &pair : map)
        {
            cout << pair.first << " => [  ";
            for (double d : pair.second)
                cout << d << "  ";
            cout << "]\n";
        }
    }
};

int main()
{
    Solution s;
    vector<string> keyName = {"daniel", "daniel", "daniel", "luis", "luis", "luis", "luis"};
    vector<string> keyTime = {"10:00", "10:40", "11:00", "09:00", "11:00", "13:00", "15:00"};

    vector<string> keyName2 = {"alice", "alice", "alice", "bob", "bob", "bob", "bob"};
    vector<string> keyTime2 = {"12:01", "12:00", "18:00", "21:00", "21:20", "21:30", "23:00"};

    vector<string> keyName3 = {"john", "john", "john"};
    vector<string> keyTime3 = {"23:58", "23:59", "00:01"};

    vector<string> keyName4 = {"leslie", "leslie", "leslie", "clare", "clare", "clare", "clare"};
    vector<string> keyTime4 = {"13:00", "13:20", "14:00", "18:00", "18:51", "19:30", "19:49"};
    vector<string> keyName_debug1 = {"leslie", "leslie", "leslie", "clare", "clare", "clare", "clare"};
    vector<string> keyTime_debug1 = {"13:00",
                                     "13:20",
                                     "14:00",
                                     "18:00",
                                     "18:51",
                                     "19:30",
                                     "19:49"};

    s.alertNames(keyName, keyTime);
    // s.print(s.alertNames(keyName, keyTime));
    // s.print(s.alertNames(keyName2, keyTime2));
    // s.print(s.alertNames(keyName3, keyTime3));
    // s.print(s.alertNames(keyName4, keyTime4));
    // s.print(s.alertNames(keyName_debug1, keyTime_debug1));
}