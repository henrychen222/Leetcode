class MinStack:

    def __init__(self):
        self.stack = []

    def isEmpty(self):
        # return self.stack == []
        return len(self.stack) == 0

    def size(self):
        return len(self.stack)

    def push(self, x):
        if x not in self.stack:
            self.stack.append(x)
            return True
        else:
            return False

    def pop(self):
        if len(self.stack) <= 0:
            print("no element in the stack")
        else:
            return self.stack.pop()

    def top(self):
        # return self.stack[-1]
        return self.stack[len(self.stack) - 1]

    def bottom(self):
        return self.stack[0]

    def getMin(self):
        min = 0

        if len(self.stack) == 1:
            min = self.stack[0]

        # for i in self.stack:
        #     if self.stack[i] is not None:
        #         min = self.stack[i]

        for j in range(len(self.stack)):
            if self.stack[j] < min:
                min = self.stack[j]
        return min


def example1():
    minStack = MinStack()
    minStack.push(-2)
    minStack.push(0)
    minStack.push(-3)
    print(minStack.getMin())  # Returns -3.
    minStack.pop()
    print(minStack.top())  # Returns 0.
    print(minStack.getMin())  # Returns -2.


def example2():
    minStack = MinStack()
    minStack.push(2)
    minStack.push(0)
    minStack.push(3)
    minStack.push(0)
    print(minStack.getMin())   # 0
    minStack.pop()  # 0
    print(minStack.getMin())   # 0
    minStack.pop()  # 3
    print(minStack.getMin())   # 0
    minStack.pop()  # 0
    print(minStack.getMin())   # 2



if __name__ == '__main__':
    example1()
    print()
    example2()
