/**
 * 12.30 evening
 * https://leetcode.com/problems/remove-sub-folders-from-the-filesystem
 */
#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>
using namespace std;

class Solution
{
public:
    void print(vector<string> const &input)
    {
        for (int i = 0; i < input.size(); i++)
        {
            cout << input.at(i) << ' ';
        }
        cout << endl;
    }

    // Accepted --- 248 ms	55.2 MB  57.20%
    // https://zxi.mytechroad.com/blog/hashtable/leetcode-1233-remove-sub-folders-from-the-filesystem/
    vector<string> removeSubfolders(vector<string> &folder)
    {
        unordered_set<string> s(begin(folder), end(folder));
        vector<string> ans;
        for (const auto &cur : folder)
        {
            string f = cur;
            bool valid = true;
            while (!f.empty() && valid)
            {
                while (f.back() != '/')
                    f.pop_back();
                f.pop_back();
                if (s.count(f))
                    valid = false;
            }
            if (valid)
                ans.push_back(cur);
        }
        return ans;
    }

    /** 
     * Accepted --- 396 ms 118.2 MB 23.89% 
     * https://www.acwing.com/file_system/file/content/whole/index/content/133815/
     * **/
    vector<string> removeSubfolders2(vector<string> &folder)
    {
        sort(folder.begin(), folder.end());
        int n = folder.size();
        vector<string> ans;

        ans.push_back(folder[0]);

        for (int i = 1; i < n; i++)
            if (!is_under(ans[ans.size() - 1], folder[i]))
                ans.push_back(folder[i]);

        return ans;
    }

    vector<string> split(const string &x)
    {
        vector<string> cp;
        int n = x.length();

        int last = 1;
        for (int i = 1; i < n; i++)
            if (x[i] == '/')
            {
                cp.push_back(x.substr(last, i - last));
                last = i + 1;
            }

        cp.push_back(x.substr(last, n - last));
        return cp;
    }

    bool is_under(const string &x, const string &y)
    {
        vector<string> sx(split(x));
        vector<string> sy(split(y));

        int n = sx.size(), m = sy.size();
        if (n >= m)
            return false;

        for (int i = 0; i < n; i++)
            if (sx[i] != sy[i])
                return false;

        return true;
    }

    /**
     * Accepted --- 232 ms 45 MB 75.74%
     * **/
    vector<string> removeSubfolders3(vector<string> &folder)
    {
        sort(folder.begin(), folder.end());
        vector<string> ans;
        ans.push_back(folder[0]);
        for (int i = 1; i < folder.size(); i++)
        {
            string father = ans.back() + '/';
            string cur = folder[i];
            if (cur.find(father) == cur.npos)
                ans.push_back(cur);
        }
        return ans;
    }
};

int main()
{
    Solution s;

    vector<string> folder1;
    folder1.push_back("/a");
    folder1.push_back("/a/b");
    folder1.push_back("/c/d");
    folder1.push_back("/c/d/e");
    folder1.push_back("/c/f");
    s.print(s.removeSubfolders(folder1)); // ["/a","/c/d","/c/f"]

    vector<string> folder2;
    folder2.push_back("/a");
    folder2.push_back("/a/b/c");
    folder2.push_back("/a/b/d");
    s.print(s.removeSubfolders(folder2)); // ["/a"]

    vector<string> folder3;
    folder3.push_back("/a/b/c");
    folder3.push_back("/a/b/ca");
    folder3.push_back("/a/b/d");
    s.print(s.removeSubfolders(folder3)); // ["/a/b/c","/a/b/ca","/a/b/d"]

    cout << endl;
    s.print(s.removeSubfolders2(folder1));
    s.print(s.removeSubfolders2(folder2));
    s.print(s.removeSubfolders2(folder3));

    cout << endl;
    s.print(s.removeSubfolders3(folder1));
    s.print(s.removeSubfolders3(folder2));
    s.print(s.removeSubfolders3(folder3));

    return 0;
}
