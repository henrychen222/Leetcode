// 03/15/21 afternoon
#include <iostream>
#include <set>
#include <vector>
using namespace std;

#define all(x) x.begin(), x.end()
#define sz(x) (int)(x).size()
#define f first
#define s second
#define eb emplace_back
#define lb lower_bound
typedef long long ll;
typedef pair<int, int> pii;

class Solution {
public:
  void print_vector_pair(vector<pair<int, int>> &a) {
    cout << "[";
    for (int i = 0; i < a.size(); i++) cout << "[" << a[i].first << "," << a[i].second << "]";
    cout << "]" << endl;
  }

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

  int maximumScore(vector<int>& nums, int pos) {
    int n = sz(nums);
    vector<pii> v;
    for (int i = 0; i < n; i++) v.eb(nums[i], i);
    sort(all(v));
    print_vector_pair(v);
    ll ret = -1e18;
    set<int> locs;
    locs.insert(-1);
    locs.insert(n);
    for (auto p : v) { // value, index
      print_set(locs);
      cout << "index: " << p.s << endl;
      auto it = locs.lb(p.s);
      // cout << *it << endl;
      int rhs = *it;
      it--;
      int lhs = *it;
      cout << lhs << " " << rhs << endl;
      if (pos >= rhs || pos <= lhs) continue;
      ret = max(ret, (rhs - lhs - 1LL) * (p.f));
      locs.insert(p.s);
    }
    return ret;
  }
};

int main () {
  vector<int> nums { 1, 4, 3, 7, 4, 5 };
  int k = 3;
  vector<int> nums2 { 5, 5, 4, 5, 4, 1, 1, 1 };
  int k2 = 0;
  vector<int>  nums_debug1 { 6569, 9667, 3148, 7698, 1622, 2194, 793, 9041, 1670, 1872 };
  int k_debug1 = 5;

  Solution s;
  cout << s.maximumScore(nums, k) << endl;
  // cout << s.maximumScore(nums2, k2) << endl;
  // cout << s.maximumScore(nums_debug1, k_debug1) << endl;
}