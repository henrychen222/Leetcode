// 1.8 evening
// Answer: http://www.cnblogs.com/grandyang/p/9062143.html

#include <iostream>
#include <vector>
#include <stack>

using namespace std;

struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution
{
    // ---------Solution 1 pass--------------
  public:
    // int minDiffInBST(TreeNode *root)
    // {
    //     int res = INT_MAX;
    //     vector<int> v;
    //     helper(root, v);
    //     for (int i = 1; i < v.size(); ++i)
    //     {
    //         res = min(res, v[i] - v[i - 1]);
    //     }
    //     return res;
    // }
    // void helper(TreeNode *node, vector<int> &vals)
    // {
    //     if (!node)
    //         return;
    //     helper(node->left, vals);
    //     vals.push_back(node->val);
    //     helper(node->right, vals);
    // }

    //---------Solution 2 pass--------------
    // int minDiffInBST(TreeNode *root)
    // {
    //     int res = INT_MAX, pre = -1;
    //     helper(root, pre, res);
    //     return res;
    // }
    // void helper(TreeNode *node, int &pre, int &res)
    // {
    //     if (!node)
    //         return;
    //     helper(node->left, pre, res);
    //     if (pre != -1)
    //         res = min(res, node->val - pre);
    //     pre = node->val;
    //     helper(node->right, pre, res);
    // }

    // ---------Solution 3 pass--------------
    // int minDiffInBST(TreeNode *root)
    // {
    //     int res = INT_MAX;
    //     helper(root, INT_MIN, INT_MAX, res);
    //     return res;
    // }
    // void helper(TreeNode *node, int low, int high, int &res)
    // {
    //     if (!node)
    //         return;
    //     if (low != INT_MIN)
    //         res = min(res, node->val - low);
    //     if (high != INT_MAX)
    //         res = min(res, high - node->val);
    //     helper(node->left, low, node->val, res);
    //     helper(node->right, node->val, high, res);
    // }

    //---------Solution 4 pass--------------
    int minDiffInBST(TreeNode *root)
    {
        int res = INT_MAX, pre = -1;
        stack<TreeNode *> st;
        TreeNode *p = root;
        while (!st.empty() || p)
        {
            if (p)
            {
                st.push(p);
                p = p->left;
            }
            else
            {
                p = st.top();
                st.pop();
                if (pre != -1)
                    res = min(res, p->val - pre);
                pre = p->val;
                p = p->right;
            }
        }
        return res;
    }
};

int main(int argc, char const *argv[])
{
    /* code */
    return 0;
}
