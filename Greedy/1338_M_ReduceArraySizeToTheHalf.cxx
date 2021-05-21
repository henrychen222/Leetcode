// 5.14 evening
// https://www.acwing.com/solution/LeetCode/content/8110/
#include <iostream>
#include <vector>
#include <unordered_map>
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

    void print_map(unordered_map<int, int> map){
        for (const auto &p : map) 
        cout << "map[" << p.first << "] = " << p.second << '\n';
    }
    
    void print_map(unordered_map<string, int> map){
        for (const auto &p : map) 
        cout << "map[" << p.first << "] = " << p.second << '\n';
    }

    int minSetSize(vector<int> &arr)
    {
        unordered_map<int, int> v;
        vector<int> c;
        for (int x : arr)
        {
            v[x]++;
        }
        // print_map(v);
        for (const auto &ele : v)
        {
            c.push_back(ele.second);
        }
        // print(c);
        sort(c.begin(), c.end());
        // print(c);
        int tot = 0;
        for (int i = c.size() - 1; i >= 0; i--)
        {
            tot += c[i];
            if (2 * tot >= arr.size())
            {
                return c.size() - i;
            }
        }
        return c.size();
    }
};

int main()
{
    Solution s;
    vector<int> arr{3, 3, 3, 3, 5, 5, 5, 2, 2, 7};
    vector<int> arr2{7, 7, 7, 7, 7, 7};
    vector<int> arr3{1, 9};
    vector<int> arr4{1000, 1000, 3, 7};
    vector<int> arr5{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    vector<int> debug1{9, 77, 63, 22, 92, 9, 14, 54, 8, 38, 18, 19, 38, 68, 58, 19};

    cout << s.minSetSize(arr) << endl; // 2
    cout << s.minSetSize(arr2) << endl;   // 1
    cout << s.minSetSize(arr3) << endl;   // 1
    cout << s.minSetSize(arr4) << endl;   // 1
    cout << s.minSetSize(arr5) << endl;   // 5
    cout << s.minSetSize(debug1) << endl; // 5
}