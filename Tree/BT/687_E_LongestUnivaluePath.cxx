// 7.4 morning
// https://www.cnblogs.com/grandyang/p/7636259.html
// https://leetcode.com/problems/longest-univalue-path/discuss/108136/JavaC%2B%2B-Clean-Code
#include <iostream>
using namespace std;

struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution
{
public:
    int longestUnivaluePath(TreeNode *root)
    {
        int res = 0;
        helper(root, res);
        return res;
    }

    int helper(TreeNode *node, int &res) // issue here: if remove & will return 0
    {
        if (!node)
            return 0;
        int left = helper(node->left, res);
        int right = helper(node->right, res);
        left = (node->left && node->val == node->left->val) ? left + 1 : 0;
        right = (node->right && node->val == node->right->val) ? right + 1 : 0;
        res = max(res, left + right);
        return max(left, right);
    }

    int longestUnivaluePath2(TreeNode* root) {
        int res = 0;
        if (root) helper2(root, root->val, res);
        return res;
    }
    int helper2(TreeNode* node, int parent, int& res) { // same issue
        if (!node) return 0;
        int left = helper2(node->left, node->val, res);
        int right = helper2(node->right, node->val, res);
        res = max(res, left + right);
        if (node->val == parent) return max(left, right) + 1;
        return 0;
    }
};

int main()
{
    Solution s;
    TreeNode *root = new TreeNode(5);
    root->left = new TreeNode(4);
    root->right = new TreeNode(5);
    root->left->left = new TreeNode(1);
    root->left->right = new TreeNode(1);
    root->right->right = new TreeNode(5);
    cout << s.longestUnivaluePath(root) << endl;
    cout << s.longestUnivaluePath2(root) << endl;

    TreeNode *root2 = new TreeNode(1);
    root2->left = new TreeNode(4);
    root2->right = new TreeNode(5);
    root2->left->left = new TreeNode(4);
    root2->left->right = new TreeNode(4);
    root2->right->right = new TreeNode(5);
    cout << s.longestUnivaluePath(root2) << endl;
    cout << s.longestUnivaluePath2(root2) << endl;
}