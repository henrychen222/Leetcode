# 1.3 afternoon
"""
https://www.tutorialspoint.com/python/python_searching_algorithms.htm
"""


def linear_search(list, target):
    index = 0
    result = False;

    while index < len(list) and result is False:
        if list[index] == target:
            result = True
        else:
            index += 1

    return result


def interpolation_search(list, target):
    index_begin = 0
    index_end = len(list) - 1

    while index_begin <= index_end and target >= list[index_begin] and target <= list[index_end]:

        middle = index_begin + int(float((index_end - index_begin) / (list[index_end] - list[index_begin]) * (
                target - list[index_begin])))

        # middle = index_begin + \
        #          int(((float(index_end - index_begin) / (list[index_end] - list[index_begin]))
        #               * (target - list[index_begin])))

        if list[middle] == target:
            return "Found " + str(target) + " at index " + str(middle)

        if list[middle] < target:
            index_begin = middle + 1
    return "Searched element not in the list"


if __name__ == '__main__':
    linear_list = [64, 34, 25, 12, 22, 11, 90]
    print(linear_search(linear_list, 12))
    print(linear_search(linear_list, 91))
    print()

    interpolation_list = [2, 6, 11, 19, 27, 31, 45, 121]
    print(interpolation_search(interpolation_list, 2))
    print(interpolation_search(interpolation_list, 45))
    print(interpolation_search(interpolation_list, 7))
