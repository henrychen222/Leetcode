# 12.23

# https://www.tutorialspoint.com/python/python_dequeue.htm
# read DSAP book 6.3 Double-Ended Queues from P247
# read DSAJ book 6.3 Double-Ended Queues from P248

"""a queue-like data structure that supports insertion and deletion at both the front and the back of the queue"""

import collections

doubleEnded_queue = collections.deque(["Mon", "Tue", "Wed"])

doubleEnded_queue.append("Thu")  # add from the tail
print(doubleEnded_queue)

doubleEnded_queue.appendleft("Sun")  # add from the head
print(doubleEnded_queue)

doubleEnded_queue.pop()
print(doubleEnded_queue)  # remove from the tail

doubleEnded_queue.popleft()
print(doubleEnded_queue)  # remove from the head
