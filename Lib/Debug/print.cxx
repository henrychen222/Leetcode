// 11.28 evening
#include <iostream>
#include <set>
#include <vector>
#include <unordered_map>
using namespace std;

typedef pair<int, int> ii;
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

    void print_map(unordered_map<int, int> map)
    {
        for (const auto &p : map)
            cout << "map[" << p.first << "] = " << p.second << '\n';
    }

    void print_map_vector(unordered_map<int, vector<int>> map)
    {
        for (auto it = map.begin(); it != map.end(); ++it)
        {
            cout << it->first << " : ";
            for (auto it2 = it->second.begin(); it2 != it->second.end(); ++it2)
                cout << *it2 << " ";
            cout << endl;
        }
    }

    void print_set_pair(set<ii> A)
    {
        for (auto const &var : A)
        {
            cout << "(" << var.first << ", " << var.second << ")"
                 << " ";
        }
        cout << endl;
    }
};