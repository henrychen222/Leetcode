// 5.24 night
#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    void printVectorOfVector(vector<vector<int>> const &input)
    {
        for (int i = 0; i < input.size(); i++)
        {
            for (int j = 0; j < input[i].size(); j++)
            {
                cout << input[i][j] << " ";
            }
            cout << endl;
        }
    }

    vector<vector<int>> reconstructQueue(vector<vector<int>> &people)
    {
        sort(people.begin(), people.end(), [](vector<int> &a, vector<int> &b) {
            return a[0] > b[0] || (a[0] == b[0] && a[1] < b[1]);
        });
        printVectorOfVector(people);
        cout << endl;
        vector<vector<int>> res;
        for (auto a : people)
        {
            res.insert(res.begin() + a[1], a);
            printVectorOfVector(res);
        }
        // printVectorOfVector(res);
        cout << endl;
        return res;
    }
};

int main()
{
    Solution s;
    vector<vector<int>> people{{7, 0}, {4, 4}, {7, 1}, {5, 0}, {6, 1}, {5, 2}};
    s.printVectorOfVector(s.reconstructQueue(people));
}