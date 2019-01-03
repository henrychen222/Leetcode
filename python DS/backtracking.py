# 1.1 night

"""
Backtracking is a form of recursion
https://www.tutorialspoint.com/python/python_backtracking.htm

https://www.geeksforgeeks.org/backtracking-algorithms/
https://www.geeksforgeeks.org/backtracking-introduction/
https://medium.com/@andreaiacono/backtracking-explained-7450d6ef9e1a
"""


def permute(iteration, s):
    if iteration == 1:
        return s
    else:
        """ list comprehension two for loops
        https://stackoverflow.com/questions/18551458/how-to-frame-two-for-loops-in-list-comprehension-python """
        return [y + x for y in permute(1, s) for x in permute(iteration - 1, s)]

        # plus = []
        # for y in permute(1, s):
        #     for x in permute(iteration - 1, s):
        #         plus.append(y + x)
        # return plus


if __name__ == '__main__':
    print(permute(1, ["a", "b", "c"]))
    print(permute(2, ["a", "b", "c"]))

    print(permute(3, ["a", "b", "c"]))
