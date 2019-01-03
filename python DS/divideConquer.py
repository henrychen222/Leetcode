# 1.1 afternoon

"""
https://www.tutorialspoint.com/python/python_divide_and_conquer.htm
Read DSAP P538 divide and conquer

Divide: If the input size is smaller than a certain threshold (say, one or two elements),
        solve the problem directly using a straightforward method and return the solution so obtained.
        Otherwise, divide the input data into two or more disjoint subsets.
Conquer: Recursively solve the subproblems associated with the subsets.
Combine: Take the solutions to the subproblems and merge them into a solution to the original problem.
"""

# Compare this example to Merge Sort in Sorting.py

# Binary Search implementation exaple
def binary_search(list, value):
    index_begin = 0
    index_end = len(list) - 1

    if index_begin > index_end:
        return None

    # Find the middle most value
    while index_begin <= index_end:
        middle = (index_begin + index_end) // 2
        if list[middle] == value:
            return middle
        elif list[middle] < value:
            index_begin = middle + 1
        else:
            index_end = middle - 1


def main():
    list = [2, 7, 19, 34, 53, 72]
    print(binary_search(list, 72))
    print(binary_search(list, 11))


if __name__ == '__main__':
    main()
