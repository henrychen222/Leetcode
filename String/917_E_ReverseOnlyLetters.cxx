/**
 * 1.18 evening
 * https://leetcode.com/problems/reverse-only-letters/
 * 
 * std::isalpha()
 * http://www.cplusplus.com/reference/locale/isalpha/
 * 
 * std:swap()
 * http://www.cplusplus.com/reference/algorithm/swap/
 * https://en.cppreference.com/w/cpp/algorithm/swap
 */
#include <iostream>
using namespace std;

class Solution
{
public:
    /* 
    Accepted --- 4ms 8.4 MB 59.81%
    https://zxi.mytechroad.com/blog/string/leetcode-917-reverse-only-letters/
    */
    string reverseOnlyLetters_two_pointers_index(string S)
    {
        int i = 0;
        int j = S.length() - 1;
        while (i < j)
        {
            if (isalpha(S[i]) && isalpha(S[j])) //java: Character.isLetter()
            {
                swap(S[i++], S[j--]);
            }
            else
            {
                if (!isalpha(S[i]))
                    ++i;
                if (!isalpha(S[j]))
                    --j;
            }
        }
        return S;
    }

    /* 
    Accepted ---  4 ms	8.5 MB	59.81%
    https://zxi.mytechroad.com/blog/string/leetcode-917-reverse-only-letters/
    */
    string reverseOnlyLetters_two_pointers_iterator(string S)
    {
        auto it1 = begin(S);
        auto it2 = prev(end(S));
        while (it1 < it2)
        {
            if (isalpha(*it1) && isalpha(*it2))
            {
                swap(*it1++, *it2--);
            }
            else
            {
                if (!isalpha(*it1))
                    ++it1;
                if (!isalpha(*it2))
                    --it2;
            }
        }
        return S;
    }
};

int main()
{

    Solution s;

    string s1 = "ab-cd";
    string s2 = "a-bC-dEf-ghIj";
    string s3 = "Test1ng-Leet=code-Q!";

    cout << s.reverseOnlyLetters_two_pointers_index(s1) << endl; // "dc-ba"
    cout << s.reverseOnlyLetters_two_pointers_index(s2) << endl; // "j-Ih-gfE-dCba"
    cout << s.reverseOnlyLetters_two_pointers_index(s3) << endl; // "Qedo1ct-eeLg=ntse-T!"

    cout << endl
         << s.reverseOnlyLetters_two_pointers_iterator(s1) << endl;
    cout << s.reverseOnlyLetters_two_pointers_iterator(s2) << endl;
    cout << s.reverseOnlyLetters_two_pointers_iterator(s3) << endl;

    return 0;
}