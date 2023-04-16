// 5.30 night
#include <iostream>
#include <vector>
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
    int ret;
    void dfs(TreeNode *x, int s)
    {
        if (x->left == NULL && x->right == NULL)
        {
            if (s == 0 || ((s & -s) == s))
                ret++;
            return;
        }
        if (x->left)
            dfs(x->left, s ^ (1 << x->left->val));
        if (x->right)
            dfs(x->right, s ^ (1 << x->right->val));
    }
    int pseudoPalindromicPaths(TreeNode *root)
    {
        ret = 0;
        dfs(root, 1 << root->val);
        return ret;
    }
};

int main()
{
    // [2, 3, 1, 3, 1, null, 1];
    TreeNode *root = new TreeNode(2);
    root->left = new TreeNode(3);
    root->right = new TreeNode(1);
    root->left->left = new TreeNode(3);
    root->left->right = new TreeNode(1);
    root->right->right = new TreeNode(1);

    // [2, 1, 1, 1, 3, null, null, null, null, null, 1]
    TreeNode *root2 = new TreeNode(2);
    root2->left = new TreeNode(1);
    root2->right = new TreeNode(1);
    root2->left->left = new TreeNode(1);
    root2->left->right = new TreeNode(3);
    root2->left->right->right = new TreeNode(1);

    // [9]
    TreeNode *root3 = new TreeNode(9);

    Solution s;
    cout << s.pseudoPalindromicPaths(root) << endl;
    cout << s.pseudoPalindromicPaths(root2) << endl;
    cout << s.pseudoPalindromicPaths(root3) << endl;
}