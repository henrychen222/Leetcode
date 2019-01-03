# https://www.tutorialspoint.com/python/python_stack.htm   12.23
# read DSAP book 6.1 Stacks from P229
# read DSAJ book 6.1 Stacks from P226
class Stack:
    def __init__(self):
        self.stack = []

    def isEmpty(self):
        return self.stack == []

    def add(self, data):
        if data not in self.stack:
            self.stack.append(data)
            # self.stack.insert(0, data)   wrong
            return True
        else:
            return False

    def remove(self):
        if len(self.stack) <= 0:
            print("no element in the stack")
        else:
            return self.stack.pop()

    # get the top stack element
    def peek(self):
        return self.stack[0]  # problem   stack[0] 不是最下面那个？ 但是网上都是这么写peek()

    # get the bottom stack element
    def bottom(self):
        return self.stack[-1]  # problem

    def size(self):
        return len(self.stack)
