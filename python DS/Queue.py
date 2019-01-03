# https://www.tutorialspoint.com/python/python_queue.htm
# read DSAP book 6.2 Queues from P239
# read DSAJ book 6.2 Queues from P238
class Queue:
    def __init__(self):
        self.queue = list()

    def isEmpty(self):
        return self.items == []

    def enqueue(self, data):
        if data not in self.queue:
            self.queue.insert(0, data)
            # self.queue.append(data)
            return True
        return False

    def dequeue(self):
        if len(self.queue) > 0:
            return self.queue.pop()
        else:
            return ("No elements in Queue!")

    def size(self):
        return len(self.queue)

