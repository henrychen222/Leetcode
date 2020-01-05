/**
 * 1.4 night
 * https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character
 */
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

/**
 * Accepted --- 12 ms 8.9 MB 100%
 * https://kknews.cc/code/vlrg6qq.html
 */
int *numSmallerByFrequency(char **queries, int queriesSize, char **words, int wordsSize, int *returnSize)
{
    int *result = malloc(queriesSize * sizeof(int));
    int count[11];
    memset(count, 0, sizeof(count));
    *returnSize = queriesSize;
    for (int i = 0; i < wordsSize; i++)
    {
        count[func(words[i]) - 1]++;
    }
    for (int i = 9; i >= 0; i--)
    {
        count[i] += count[i + 1];
    }
    for (int i = 0; i < queriesSize; i++)
    {
        result[i] = count[func(queries[i])];
    }
    return result;
}

int func(char *s)
{
    int count[26];
    memset(count, 0, sizeof(count));
    while (*s)
    {
        count[(*s++) - 'a']++;
    }
    for (int i = 0; i < 26; i++)
    {
        if (count[i] > 0)
        {
            return count[i];
        }
    }
    return 0;
}

// void printArr(char **arr[])
// {
//     for (int i = 0; i < arr; i++)
//     {
//         printf("%d: %s\n", i, arr[i]);
//     }
// }

int main()
{
    // const char * queries = {"cbd"};
    // queries = (char *) malloc(1);

    // const char * words = {"zaaaz"};
    // words = (char *) malloc(1);

    // int *returnSize = sizeof(queries);
    // printArr(numSmallerByFrequency(queries, sizeof(queries), words, sizeof(words), returnSize));

    // return 0;
}