---
banner_alt: Trees
banner: https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg
title_prefix: Code
title: Trees
description: Let's explore one of the most commun data structure.
date: '2025-03-01'
---

## What are trees in coding

A tree data structure is a non-linear, hierarchical structure consisting of nodes connected by edges.
It starts with a single root node, which can have child nodes, forming a branching structure.
Each node can have only one parent but may have multiple children. Nodes without children are called leaves.

![](https://imgur.com/z2dJngW.png)

There are different types of trees, the most commun ones are binary trees where each parent nodes can have maximum two children.

### How do we define a node in a tree

In JavaScript we could define a node of a binary tree with the following class `TreeNode`:

```js
class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}
```

As we can see a node has a value and the two pointers to other nodes, if these `right` and `left` pointers are null it means the node is a `leaf`.

### Traverse a tree

Traversing a tree means visiting all the nodes in a specific order to process or retrieve data.
There are two main types of technique:

- **Depth First Traversal** or **DFS** which explore the nodes in the order top-bottom going as far down a branch before backtracking.
- **Breadth First Traversal** or **BFS** which explore the nodes in the order left-right exploring all the nodes at each level before moving to the level down.

### Exercise with trees

Given the root of a binary tree, calculate its maximum depth (the number of levels in the tree)

Using **DFS**:
 • Traverse the tree recursively or with a stack.
 • For each node, calculate the depth of its left and right subtrees.
 • The maximum depth is the max between the right depth and the left depth subtrees plus one.

Using **BFS**:
 • Use a queue to traverse level by level.
 • Count how many levels are processed until all nodes are visited.

```js
function maxDepthDFS(root) {
  if (!root) return 0; // Base case: empty tree
  const leftDepth = maxDepthDFS(root.left);
  const rightDepth = maxDepthDFS(root.right);
  return Math.max(leftDepth, rightDepth) + 1; // Add 1 for the current level
}
```

```js
function maxDepthBFS(root) {
  if (!root) return 0; // Base case: empty tree
  let depth = 0;
  const queue = [root]; // Initialize queue with the root node

  while (queue.length > 0) {
    let levelSize = queue.length; // Number of nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift(); // Remove the front node from the queue
      if (currentNode.left) queue.push(currentNode.left); // Add left child to the queue
      if (currentNode.right) queue.push(currentNode.right); // Add right child to the queue
    }
    depth++; // Increment depth after processing all nodes at this level
  }

  return depth;
}
```
