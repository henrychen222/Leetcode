// 5.24 night
// 5.30 evening debug
#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    void printVectorOfVector(vector<vector<int>> v)
    {
        cout << "[";
        for (int i = 0; i < v.size(); i++)
        {
            cout << "[";
            for (int j = 0; j < v[i].size(); j++)
            {
                cout << v[i][j] << " ";
            }
            cout << "] ";
        }
        cout << "]" << endl;
    }

    vector<vector<int>> reconstructQueue(vector<vector<int>> &people)
    {
        sort(people.begin(), people.end(), [](vector<int> &a, vector<int> &b) {
            return a[0] > b[0] || (a[0] == b[0] && a[1] < b[1]);
        });
        // printVectorOfVector(people);
        // cout << endl;
        vector<vector<int>> res;
        for (auto a : people)
        {
            res.insert(res.begin() + a[1], a);
        }
        // printVectorOfVector(res);
        // cout << endl;
        return res;
    }

    vector<vector<int>> reconstructQueue2(vector<vector<int>> &people)
    {
        sort(people.begin(), people.end(), [](vector<int> &a, vector<int> &b) {
            return a[0] > b[0] || (a[0] == b[0] && a[1] < b[1]);
        });
        // printVectorOfVector(people);
        // cout << endl;
        for (int i = 1; i < people.size(); ++i)
        {
            int cnt = 0;
            for (int j = 0; j < i; ++j)
            {
                if (cnt == people[i][1])
                {
                    auto t = people[i];
                    for (int k = i - 1; k >= j; --k)
                    {
                        people[k + 1] = people[k];
                    }
                    people[j] = t;
                    break;
                }
                ++cnt;
            }
        }
        return people;
    }
};

int main()
{
    Solution s;
    vector<vector<int>> people{{7, 0}, {4, 4}, {7, 1}, {5, 0}, {6, 1}, {5, 2}};
    s.printVectorOfVector(s.reconstructQueue(people));
    s.printVectorOfVector(s.reconstructQueue2(people)); // [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
}