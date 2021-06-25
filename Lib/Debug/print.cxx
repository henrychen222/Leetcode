// 11.28 evening  03/15/21 afternoon rearrange format
#include <iostream>
#include <set>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution
{
public:

    ////////////////////////////// Array ///////////////////////////////////////////
    void print_array(int a[], int n) {
        for (int i = 0; i < n; i++) cout << a[i] << ' ';
        cout << endl;
    }

    ////////////////////////////// Vector ///////////////////////////////////////////
    void print_vector(vector<int> const &input) {
        for (int i = 0; i < input.size(); i++) cout << input.at(i) << ' ';
        cout << endl;
    }

    void print_2DVector(vector<vector<int>> &a) {
        cout << "[";
        for (int i = 0; i < a.size(); i++) {
            cout << "[";
            for (int j = 0; j < a[i].size(); j++) cout << a[i][j] << " ";
            cout << "]";
        }
        cout << "]" << endl;
    }

    void print_vector_pair(vector<pair<int, int>> &a) {
        cout << "[";
        for (int i = 0; i < a.size(); i++) cout << "[" << a[i].first << "," << a[i].second << "]";
        cout << "]" << endl;
    }

    ////////////////////////////// Map ////////////////////////////////////////////
    void print_map(unordered_map<int, int> map) {
        for (const auto &p : map) cout << "map[" << p.first << "] = " << p.second << '\n';
    }

    void print_map(map<int, int> map) {
        for (const auto &p : map) {
            cout << " map[" << p.first << "] = " << p.second;
        }
        cout << '\n';
    }

    void print_map_vector(unordered_map<int, vector<int>> map) {
        for (auto it = map.begin(); it != map.end(); ++it) {
            cout << it->first << " : ";
            for (auto it2 = it->second.begin(); it2 != it->second.end(); ++it2) cout << *it2 << " ";
            cout << endl;
        }
    }

    ////////////////////////////// Set ////////////////////////////////////////////
    void print_set(set<int> s) {
        int n = s.size();
        cout << "Set {";
        int i = 0;
        for (auto const &e : s) {
            if (i == n - 1) {
                cout << e;
            } else {
                cout << e << ",";
            }
            i++;
        }
        cout << "}" << endl;
    }

    void print_set_pair(set<pair<int, int>> A) {
        for (auto const &var : A) cout << "(" << var.first << ", " << var.second << ")" << " ";
        cout << endl;
    }

};

int main()
{
    Solution s;
    vector<vector<int>> a{
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}};
    s.print_2DVector(a);
}