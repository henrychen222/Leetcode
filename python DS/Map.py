# https://www.tutorialspoint.com/python/python_maps.htm    12.22

"""ChainMap is a type of data structure to manage multiple dictionaries together as one unit"""

import collections

dict1 = {'day1': 'Mon', 'day2': 'Tue'}
dict2 = {'day1': 'Mon', 'day2': 'Tue'}

# ChainMap: multiple dicts (or other mappings) together to create a single, updateable view
result = collections.ChainMap(dict1, dict2)
print(result)

# Creating a single dictionary
print(result.maps, "\n")

# get the key and value separately from Chainmap
# print("Key is: " + format(list(result.keys())))
# print("Value is: " + format(list(result.values())))
print('Keys = {}'.format(list(result.keys())))
print('Values = {}'.format(list(result.values())))   # 把format的后的值填在括号里

# Print all the elements from the result
print()
for (k, v) in result.items():
    print("{} = {}".format(k, v))     # 把format的后的键值对分别填在括号里

#Find a specific value in the result
print('day1 is in result = {}'.format("day1" in result))
print('day3 is in result = {}'.format("day3" in result))
print('day4 is in result = {}'.format("day4" in result))

"""Map Reordering """
print("\n")
result_one = collections.ChainMap(dict1, dict2)
result_two = collections.ChainMap(dict2, dict1)
print(result_one.maps, "\n")
print(result_two.maps, "\n")

"""Updating Map"""
dict2['day2'] = 'Fri'
print(result_one.maps)
print(result_two.maps)
