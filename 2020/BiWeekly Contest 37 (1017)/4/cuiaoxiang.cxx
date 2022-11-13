// 10.17 afternoon
#include <iostream>
#include <vector>
using namespace std;

/**
 * read 1LL: 
 * https://blog.csdn.net/ccblogger/article/details/81211863
 * https://stackoverflow.com/questions/16248221/what-is-1ll-or-2ll-in-c-and-c
 */
// Accepted --- 488ms
const int MOD = 1e9 + 7;
int power_mod(int a, int n)
{
    int ret = 1;
    for (; n; n /= 2)
    {
        if (n & 1)
            ret = 1LL * ret * a % MOD;
        a = 1LL * a * a % MOD;
    }
    return ret;
}

class Fancy
{
public:
    int A, B;
    vector<int> a;
    Fancy()
    {
        A = 1;
        B = 0;
        a.clear();
    }

    void append(int val)
    {
        int x = 1LL * (val + MOD - B) * power_mod(A, MOD - 2) % MOD;
        a.push_back(x);
    }

    void addAll(int inc)
    {
        B = (B + inc) % MOD;
    }

    void multAll(int m)
    {
        A = 1LL * A * m % MOD;
        B = 1LL * B * m % MOD;
    }

    int getIndex(int idx)
    {
        if (idx >= a.size())
            return -1;
        int ret = a[idx];
        ret = (1LL * A * ret + B) % MOD;
        return ret;
    }
};

int main()
{
    Fancy fancy;
    fancy.append(2);
    fancy.addAll(3);
    fancy.append(7);
    fancy.multAll(2);
    cout << (fancy.getIndex(0)) << endl;
    fancy.addAll(3);
    fancy.append(10);
    fancy.multAll(2);
    cout << (fancy.getIndex(0)) << endl;
    fancy.getIndex(1);
    cout << (fancy.getIndex(2)) << endl;
}