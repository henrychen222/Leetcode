# 12.23
from Stack import Stack


def main():
    stack = Stack()
    stack.add("Mon")
    stack.add("Tue")
    print(stack.peek())
    print(stack.bottom())
    print(stack.size())

    print("\n")
    stack.add("Wed")
    stack.add("Thu")
    print(stack.peek())
    print(stack.bottom())
    print(stack.size())

    print("\n")
    stack.remove()
    print(stack.peek())
    print(stack.bottom())
    print(stack.size())


if __name__ == '__main__':
    main()
