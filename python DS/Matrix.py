# https://www.tutorialspoint.com/python/python_matrix.htm

from numpy import *

newArray = array([['Mon', 18, 20, 22, 17],
                  ['Tue', 11, 18, 21, 18],
                  ['Wed', 15, 21, 20, 19],
                  ['Thu', 11, 20, 22, 21],
                  ['Fri', 18, 17, 23, 22],
                  ['Sat', 12, 22, 20, 18],
                  ['Sun', 13, 15, 19, 16]])

print(reshape(newArray, (7, 5)))

""" Accessing Values in a Matrix """
print(newArray[2])
print(newArray[4][3])  # 23

""" Adding a row """
# append(arr, values, axis=None)
newArray_addRow = append(newArray, [['Avg', 12, 15, 13, 11]], 0)
print(newArray_addRow)

""" Adding a column """
# insert(arr, obj, values, axis=None)
newArray_addColumn = insert(newArray, [5], [[1], [2], [3], [4], [5], [6], [7]], 1)
print(newArray_addColumn)

"""Delete a row"""
# delete(arr, obj, axis=None)
# specify the index of the column and also the axis value which is 0 for a row and 1 for a column
newArray_deleteRow = delete(newArray, [2], 0)
print(newArray_deleteRow)  # the third row ['Wed', 15, 21, 20, 19] disappear

"""Delete a column"""
newArray_deleteColumn = delete(newArray, s_[2], 1)
print(newArray_deleteColumn)  # the third column 20 18 21 20 17 22 15 disappear

"""Update a row"""
newArray[3] = ['Thu', 0, 0, 0, 0]
print(newArray)

"""update a column"""
# https://stackoverflow.com/questions/26975769/modify-a-particular-row-column-of-a-numpy-array
newArray[:, 1] = [1, 1, 1, 1, 1, 1, 1]  # change the second column to to 1
print(newArray)
