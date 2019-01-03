# 12.28 noon   1.3 afternoon

from Graph import graph  # import class
from Graph import breadth_first  # import method
from Graph import depth_first


def basic_operations():
    # Create the dictionary with graph elements
    graph_elements = {"a": ["b", "c"],
                      "b": ["a", "d"],
                      "c": ["a", "d"],
                      "d": ["e"],
                      "e": ["d"]}
    print(graph_elements)

    new_graph = graph(graph_elements)

    """Adding a vertex"""
    new_graph.add_vertex("f")
    print(new_graph.get_vertices())

    print(new_graph.edges())
    """Adding an edge"""
    new_graph.add_edge({'a', 'e'})
    new_graph.add_edge({'a', 'c'})
    print(new_graph.edges())


def dfs():
    graph_dict = {"a": set(["b", "c"]),
                  "b": set(["a", "d"]),
                  "c": set(["a", "d"]),
                  "d": set(["e"]),
                  "e": set(["a"])
                  }
    depth_first(graph_dict, "a")


def bfs():
    graph_dict = {"a": set(["b", "c"]),
                  "b": set(["a", "d"]),
                  "c": set(["a", "d"]),
                  "d": set(["e"]),
                  "e": set(["a"])
                  }

    breadth_first(graph_dict, 'a')


if __name__ == '__main__':
    basic_operations()

    print("\n" + "depth first")
    dfs()

    print("\n" + "breadth first")
    bfs()
