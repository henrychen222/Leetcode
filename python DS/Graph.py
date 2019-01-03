# 12.27 morning created    12.28 noon

"""
https://www.tutorialspoint.com/python/python_graphs.htm
"""

import collections


class graph:
    def __init__(self, graph_dict=None):
        if graph_dict is None:
            graph_dict = {}
        self.graph_dict = graph_dict

    def find_edges(self):
        edge_name = []
        for vertex in self.graph_dict:
            for nxt_vertex in self.graph_dict[vertex]:  # graph_dict[vertex] ???
                if {nxt_vertex, vertex} not in edge_name:
                    edge_name.append({nxt_vertex, vertex})
                    # print({nxt_vertex, vertex})
        return edge_name

    def edges(self):
        return self.find_edges()

    """
    tuple(): converts a list of items into tuples
    https://www.tutorialspoint.com/python3/tuple_tuple.htm
    """

    def add_edge(self, new_edge):
        new_edge = set(new_edge)
        (vertex1, vertex2) = tuple(new_edge)
        if vertex1 in self.graph_dict:
            self.graph_dict[vertex1].append(vertex2)  # ????
        else:
            self.graph_dict[vertex1] = [vertex2]  # ????

    def add_vertex(self, new_vertex):
        if new_vertex not in self.graph_dict:
            self.graph_dict[new_vertex] = []  # ?????

    def get_vertices(self):
        return list(self.graph_dict.keys())


"""
1.3 afternoon
Graph Traversal Algorithms https://www.tutorialspoint.com/python/python_graph_algorithms.htm
Read DSAP 14.3
"""


# Check for the visisted and unvisited nodes
def depth_first(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start)
    for next in graph[start] - visited:
        depth_first(graph, next, visited)
    return visited


def breadth_first(graph, start_node):
    # Track the visited and unvisited nodes using queue
    seen = set([start_node])
    queue = collections.deque([start_node])  # create double-ended queue  Check Double_Ended_Queue.py
    while queue:
        vertex = queue.popleft()
        print(vertex)
        for node in graph[vertex]:
            if node not in seen:
                seen.add(node)
                queue.append(node)
