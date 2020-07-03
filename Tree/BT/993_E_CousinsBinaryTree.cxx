// 7.2 night
#include <iostream>
#include <unordered_map>
#include <queue>
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
    // https://www.cnblogs.com/douzujun/p/10922786.html
    bool isCousins(TreeNode *root, int x, int y)
    {
        int x_depth = -1, y_depth = -1;
        TreeNode *x_parent = getDepth(root, x, 0, x_depth);
        TreeNode *y_parent = getDepth(root, y, 0, y_depth);
        // cout << x_depth << " " << y_depth << " " << x_parent->val << " " << y_parent->val << " " << endl;
        if (x_depth == y_depth && x_parent != y_parent)
        {
            return true;
        }
        return false;
    }

    TreeNode *getDepth(TreeNode *root, int val, int depth, int &level)
    {
        if (!root)
        {
            return nullptr;
        }

        if ((root->left && root->left->val == val) || (root->right && root->right->val == val))
        {
            level = depth;
            return root;
        }
        TreeNode *left = getDepth(root->left, val, depth + 1, level);
        // cout << level << endl;
        if (left)
        {
            return left;
        }

        TreeNode *right = getDepth(root->right, val, depth + 1, level);
        if (right)
        {
            return right;
        }

        return nullptr;
    }

    // https://blog.csdn.net/fuxuemingzhu/article/details/87867902
    unordered_map<int, pair<TreeNode *, int>> m_;
    bool isCousins2(TreeNode *root, int x, int y)
    {
        m_.clear();
        dfs(root, nullptr, 0);
        auto px = m_[x], py = m_[y];
        // cout << px.first->val << " " << py.first->val << endl;
        // cout << px.second << " " << py.second << endl;
        return px.first != py.first && px.second == py.second;
    }

    void dfs(TreeNode *root, TreeNode *parent, int depth)
    {
        if (!root)
            return;
        m_[root->val] = make_pair(parent, depth);
        dfs(root->left, root, depth + 1);
        dfs(root->right, root, depth + 1);
    }
};

int main()
{
    Solution s;

    TreeNode *root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    int x = 4, y = 3;

    TreeNode *root2 = new TreeNode(1);
    root2->left = new TreeNode(2);
    root2->right = new TreeNode(3);
    root2->left->right = new TreeNode(4);
    root2->right->right = new TreeNode(5);
    int x2 = 5, y2 = 4;

    TreeNode *root3 = new TreeNode(1);
    root3->left = new TreeNode(2);
    root3->right = new TreeNode(3);
    root3->left->right = new TreeNode(4);
    int x3 = 2, y3 = 3;

    cout << s.isCousins(root, x, y) << endl;
    cout << s.isCousins(root2, x2, y2) << endl;
    cout << s.isCousins(root3, x3, y3) << endl;

    cout << endl;
    cout << s.isCousins2(root, x, y) << endl;
    cout << s.isCousins2(root2, x2, y2) << endl;
    cout << s.isCousins2(root3, x3, y3) << endl;
}
