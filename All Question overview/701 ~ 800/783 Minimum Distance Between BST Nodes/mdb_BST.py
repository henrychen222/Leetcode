# 1.8 evening

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

    def insert(self, newval):
        # if self.val is None:
        #     return False

        if self.val:
            if newval < self.val:
                if self.left is None:
                    self.left = TreeNode(newval)
                else:
                    self.left.insert(newval)
            elif newval > self.val:
                if self.right is None:
                    self.right = TreeNode(newval)
                else:
                    self.right.insert(newval)
        else:
            self.val = newval

    def PrintTree(self):
        if self.left:
            self.left.PrintTree()
        print(self.val)
        if self.right:
            self.right.PrintTree()

# Pass
class Solution:
    def minDiffInBST(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        self.res = float("inf")
        self.prev = None
        self.inOrder(root)
        return self.res

    def inOrder(self, root):
        if not root: return
        self.inOrder(root.left)
        if self.prev:
            self.res = min(self.res, root.val - self.prev.val)
        self.prev = root
        self.inOrder(root.right)


if __name__ == '__main__':
    solution = Solution()

    # root = TreeNode(10)
    # root.insert(1)
    # root.insert(None)
    # root.insert(3)
    # root.insert(2)

    data = [4, 2, 6, 1, 3, None, None]
    root = TreeNode(data[0])
    for i in data:
        root.insert(i)
    root.PrintTree()

    print(solution.minDiffInBST(root))
