# 1.2 afternoon library     1.2 evening
"""
https://www.tutorialspoint.com/python/python_sorting_algorithms.htm
Read DSAP Chapter 12
"""

# Error
# def bubbleSort(list):
#     i, j = 0           # here report: 'int' object is not iterable
#     n = len(list)
#     while i < n - 1:
#         while j < n - i - 1:
#             if list[j] > list[j + 1]:
#                 temp = list[j]
#                 list[j] = list[j + 1]
#                 list[j + 1] = temp
#             j += 1
#         i += 1
#     return list


# 冒泡排序
def bubble_sort(list):
    for i in range(len(list) - 1, 0, -1):  # start from the last element,to the begin(not contain), step -1
        for j in range(i):  # start from 0, to i, step 1
            if list[j] > list[j + 1]:
                temp = list[j]
                list[j] = list[j + 1]
                list[j + 1] = temp


def bubble_sort2(list):
    n = len(list)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if list[j] > list[j + 1]:
                temp = list[j]
                list[j] = list[j + 1]
                list[j + 1] = temp


# 选择排序
def selection_sort(list):
    for i in range(len(list)):
        min_idx = i
        for j in range(i + 1, len(list)):
            if list[min_idx] > list[j]:
                min_idx = j
        list[i], list[min_idx] = list[min_idx], list[i]


# 归并排序
def merge_sort(input_list):  # change input_list to list will report list object is not callable
    if len(input_list) <= 1:
        return input_list

    # Find the middle point and devide it
    middle = len(input_list) // 2
    left_list = input_list[:middle]
    right_list = input_list[middle:]

    left_list = merge_sort(left_list)
    right_list = merge_sort(right_list)
    return list(merge(left_list, right_list))


def merge(left_half, right_half):
    res = []
    while len(left_half) != 0 and len(right_half) != 0:
        if left_half[0] < right_half[0]:
            res.append(left_half[0])
            left_half.remove(left_half[0])
        else:
            res.append(right_half[0])
            right_half.remove(right_half[0])
    if len(left_half) == 0:
        res = res + right_half
    else:
        res = res + left_half
    return res


# 插入排序
def insertion_sort(list):
    for i in range(1, len(list)):
        j = i - 1
        next_element = list[i]

        # Compare the current element with next one
        while (list[j] > next_element) and (j >= 0):
            list[j + 1] = list[j]
            j = j - 1
        list[j + 1] = next_element


# 希尔排序
# sort a large sublist of a given list and go on reducing the size of the list until all elements are sorted
def shell_sort(list):
    """
    floor division:丢弃运算结果的小数部分，返回整数部分
    https://blog.csdn.net/bingo_shenwei/article/details/79188995
    """
    gap = len(list) // 2
    while gap > 0:
        for i in range(gap, len(list)):
            temp = list[i]
            j = i

            # Sort the sub list for this gap
            while j >= gap and list[j - gap] > temp:
                list[j] = list[j - gap]
                j = j - gap
            list[j] = temp

        # Reduce the gap for the next element
        gap = gap // 2


if __name__ == '__main__':
    bubble_list = [19, 2, 31, 45, 6, 11, 121, 27]
    # bubbleSort(bubble_list)
    # bubble_sort(bubble_list)
    bubble_sort2(bubble_list)
    print(bubble_list)

    print()
    selection_list = [19, 2, 31, 45, 30, 11, 121, 27]
    selection_sort(selection_list)
    print(selection_list)

    insertion_list = [19, 2, 31, 45, 30, 11, 121, 27]
    insertion_sort(insertion_list)
    print(insertion_list)

    shell_list = [19, 2, 31, 45, 30, 11, 121, 27]
    shell_sort(shell_list)
    print(shell_list)

    merge_list = [64, 34, 25, 12, 22, 11, 90]
    print(merge_sort(merge_list))
