# 12.23

from Queue import Queue


def main():
    queue = Queue()
    queue.enqueue("Mon")
    queue.enqueue("Thu")
    queue.enqueue("Wed")

    print(queue.size())

    queue.dequeue()
    print(queue.size())


if __name__ == '__main__':
    main()
