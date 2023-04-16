// 5.30 afternoon
#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    void print(vector<char> const &input)
    {
        for (int i = 0; i < input.size(); i++)
        {
            cout << input.at(i) << ' ';
        }
        cout << endl;
    }

    bool hasAllCodes(string s, int k)
    {
        int n = (int)s.size();
        int all = 1 << k;
        if (n - k + 1 < all)
            return 0;
        vector<char> vis(all, 0);
        // print(vis);
        for (int i = 0, msk = 0; i < n; ++i)
        {
            msk = (msk << 1 | (s[i] == '1')) & (all - 1);
            if (i >= k - 1)
                vis[msk] = 1;
        }
        for (char x : vis)
            if (!x)
                return false;
        return true;
    }
};

int main()
{
    string s = "00110110";
    int k = 2;
    string s2 = "00110";
    int k2 = 2;
    string s3 = "0110";
    int k3 = 1;
    string s4 = "0110";
    int k4 = 2;
    string s5 = "0000000001011100";
    int k5 = 4;
    string s_debug1 = "011101100101110101101000011111101011111101110100111100010000010110010010011100110001110010101101011010010001101111000111110000001010100101111001111010110001111011001110100010001111000111010001111100101011100001001011101100010101010110001011110101001101001001111101000100011101110100100100101101110000000110001011100100111111001000100100010011001000101101100010010010001111010111010011110111110001010100000110000111010110001100100110111000111010111000010100100100101011001111010110010101110101000011011101000110001001100111100011000100110010101100001111000100101001111001100001010100100100110100101100111000110010110101010110010110001111010110101111011011100111001010101001011000101101110100001110011110001011000011100011111001110011111101110001110010000111010011110001011010100101110010110110100011111011110010100011111000000001011100110000010101110110111";
    int k_debug1 = 7;

    Solution sl;
    cout << sl.hasAllCodes(s, k) << endl;
    cout << sl.hasAllCodes(s2, k2) << endl;
    cout << sl.hasAllCodes(s3, k3) << endl;
    cout << sl.hasAllCodes(s4, k4) << endl;
    cout << sl.hasAllCodes(s5, k5) << endl;
    cout << sl.hasAllCodes(s_debug1, k_debug1) << endl;
}