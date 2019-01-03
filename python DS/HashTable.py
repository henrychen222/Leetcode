# 12.24

"""
Hash table stores key-value pairs but the key is generated through a hashing function
so, hash tale is dictionary
"""

dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}

# Accessing the dictionary with its key
print("dict['Name']: ", dict['Name'])
print("dict['Age']: ", dict['Age'])

# update dictionary
dict['Age'] = 8;  # update existing entry
dict['School'] = "DPS School"  # Add new entry
print("dict['Age']: ", dict['Age'])
print("dict['School']: ", dict['School'])

print(dict)
# Delete Dictionary Elements
del dict['Name'] # remove entry with key 'Name'
dict.clear()     # remove all entries in dict
del dict        # delete entire dictionary

print(dict)