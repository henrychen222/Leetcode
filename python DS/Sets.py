# https://www.tutorialspoint.com/python/python_sets.htm
# 12.21

"""Create a set """
Days = set(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])
print(Days)
Month = {"Jan", "Feb", "Mar"}
Dates = {21, 22, 17}
print(Month)
print(Dates)

# set(['Wed', 'Sun', 'Fri', 'Tue', 'Mon', 'Thu', 'Sat'])
# set(['Jan', 'Mar', 'Feb'])
# set([17, 21, 22])

""" Accessing Values in a Set """
for day in Days:
    print(day)

"""Adding Items to a Set"""
Days.add("Sun")
print(Days)

"""Removing Item from a Set"""
Days.discard("Sun")
print(Days)

print("\n")
"""Union of Sets"""
DaysA = set(["Mon","Tue","Wed"])
DaysB = set(["Wed","Thu","Fri","Sat","Sun"])
union_days = DaysA | DaysB
print(union_days)

"""Intersection of Sets"""
intersection_days = DaysA & DaysB
print(intersection_days)

"""Difference of Sets"""
difference_days = DaysA - DaysB
print(difference_days)

"""Compare Sets"""
compare_result = DaysA <= DaysB
compare_result2 = DaysB >= DaysA
print(compare_result)
print(compare_result2)
