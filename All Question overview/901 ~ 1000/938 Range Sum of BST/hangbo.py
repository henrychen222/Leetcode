# 1.9 afternoon

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

    def insertInBST(self, treeRoot, val):
        if treeRoot is None:
            treeRoot = TreeNode(val)
            return

        elif type(treeRoot) != 'NoneType':
            if val < treeRoot.val:
                treeRoot.left = self.insertInBST(treeRoot.left, val)
            elif val > treeRoot.val:
                treeRoot.right = self.insertInBST(treeRoot.right, val)

        # elif val < treeRoot.val:
        #     treeRoot.left = self.insertInBST(treeRoot.left, val)
        # elif val > treeRoot.val:
        #     treeRoot.right = self.insertInBST(treeRoot.right, val)

        return treeRoot


# pass
class Solution:
    def rangeSumBST(self, root, L, R):
        """
        :type root: TreeNode
        :type L: int
        :type R: int
        :rtype: int
        """
        sumO = 0

        sum_final = self.DFS(root, sumO, L, R)
        return sum_final

    def DFS(self, treeRoot, sumO, L, R):
        if treeRoot is None:
            return sumO
        if (treeRoot.val <= R and treeRoot.val >= L):
            sumO += treeRoot.val
        sumO = self.DFS(treeRoot.left, sumO, L, R)
        sumO = self.DFS(treeRoot.right, sumO, L, R)
        return sumO


if __name__ == '__main__':
    sl = Solution()

    root = [10, 5, 15, 3, 7, None, 18]
    # root = [10, 5, 15, 3, 7, 18]
    L = 7
    R = 15

    tree_node = TreeNode(root[0])
    for i in root:
        tree_node.insertInBST(tree_node, i)

    result = sl.rangeSumBST(tree_node, L, R)
    print(result)
