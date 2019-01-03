# 12.27 morning
# https://www.tutorialspoint.com/python/python_binary_tree.htm
# https://www.geeksforgeeks.org/heap-data-structure/

import heapq

H = [21, 1, 45, 78, 3, 5]
heapq.heapify(H)
print(H)

# heap insert
heapq.heappush(H, 8)
print(H)

# heap remove
heapq.heappop(H)  # remove the element at the index position 1
print(H)

# heap replace
# heapreplace: removes the smallest element, inserts the new incoming element at some place not fixed by any order
heapq.heapreplace(H,6)
print(H)
