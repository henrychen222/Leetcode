/**
 * 9.25 night
 * http://www.cplusplus.com/reference/algorithm/prev_permutation/
 * https://www.geeksforgeeks.org/stdnext_permutation-prev_permutation-c/
 * https://www.javatpoint.com/cpp-algorithm-prev_permutation-function
 */
#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

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
};

int main()
{
    Solution s;
    vector<int> arr = {3, 1, 1, 3};
    sort(arr.begin(), arr.end());
    s.print(arr);

    do
    {
     s.print(arr);
    } while (prev_permutation(arr.begin(), arr.end()));

    return 0;
}