# Computer Science Challenge - Endava Internship (2024 - 2)

This is a repository for the Endava´s Computer Science challenge for internship 2024 - 2. This repository has the solutions for exercises 283, 2415, 1192, 2035 and 32 from [LeetCode](https://leetcode.com/). All the solutions are made using JavaScript and will be explained in this repo as well as in my [LeetCode Profile](https://leetcode.com/u/JonathanB500/)

## Exercises

### [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

> Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.
> **Note** that you must do this in-place without making a copy of the array.

This algorithm moves all the zeros in an array to the end while maintaining the relative order of the non-zero elements. It does so in two main steps:

1.  **Identify Zeroes:** The algorithm first iterates through the array to find the indices of all zero elements and stores these indices in a separate list.
2.  **Remove and Append:** For each index in the list, the zero at that position is removed from the original array, and a zero is appended to the end of the array.

The algorithm effectively shifts non-zero elements forward and ensures all zeros are at the end, while operating in place with an auxiliary list to track the positions of zeros.

**Time complexity:** O(n)
**Space complexity:** O(n)

### [2415. Reverse Odd Levels of Binary Tree](https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/)

> Given the `root` of a **perfect** binary tree, reverse the node values at each **odd** level of the tree.
> For example, suppose the node values at level 3 are `[2,1,3,4,7,11,29,18]`, then it should become `[18,29,11,7,4,3,1,2]`.
> Return _the root of the reversed tree_.

This algorithm reverses the values of nodes at odd levels of a binary tree. The process involves three main steps:

1.  **Level-order traversal:** The algorithm uses a queue and Breadth-First Search (BFS) to traverse the tree level by level, storing nodes and their corresponding levels.
2.  **Identification of odd levels:** As nodes are visited, they are categorized based on their level. Nodes at even levels (parents of odd nodes) are stored in a dictionary.
3.  **Reversal of nodes:** For each even parent node, its child nodes (odd nodes) are reversed. This is achieved by iteratively swapping the values of the left-most and right-most nodes in the level.

**Time complexity:** O(n)
**Space complexity:** O(n)

### [1192. Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)

> There are `n` servers numbered from `0` to `n - 1` connected by undirected server-to-server `connections` forming a network where `connections[i] = [ai, bi]` represents a connection between servers `ai` and `bi`. Any server can reach other servers directly or indirectly through the network.
> A _critical connection_ is a connection that, if removed, will make some servers unable to reach some other server.
> Return all critical connections in the network in any order.

This algorithm finds all the critical connections (or bridges) in an undirected graph using Depth-First Search (DFS) and Tarjan's algorithm.

1.  **Graph Construction**: The algorithm builds an adjacency list representation of the graph from the given list of connections.
2.  **Initialization**: Set up arrays for discovery times (`disc`), low values (`low`), visited nodes, and parent nodes.
3.  **DFS Traversal**: Perform a DFS traversal to populate `disc` and `low` values:
    - Update `low` values based on discovery times of adjacent nodes.
    - Identify critical connections where the `low` value of an adjacent node is greater than the discovery time of the current node.
4.  **Result Collection**: Collect and return all identified critical connections.

**Time complexity:** O(V + E)
**Space complexity:** O(V + E)
( V is the number of nodes and E is the number of edges)

### [2035. Partition Array Into Two Arrays to Minimize Sum Difference](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/)

> You are given an integer array `nums` of `2 * n` integers. You need to partition `nums` into **two** arrays of length `n` to **minimize the absolute difference** of the **sums** of the arrays. To partition `nums`, put each element of `nums` into **one** of the two arrays.
> Return _the **minimum** possible absolute difference_.

This algorithm calculates the minimum difference between the sums of two subsets formed by using the meet-in-the-middle algorithm and binary search.

1.  **Divide the array into two halves:** The algorithm first divides the input array `nums` into two halves of (approximately) equal size. It calculates the index of the middle element and uses it to create two subarrays: `leftSide` and `rightSide`.

2.  **Find all possible sums for each subarray:** It then employs a recursive helper function `getAllSums` to identify all possible sums that can be formed by adding elements from each subarray. This function utilizes a dynamic programming approach to efficiently generate all combinations of subset sums.

3.  **Sort sums in the right half:** Since efficient searching is required later, the algorithm sorts the lists of sums within the `rightSide` subarray.

4.  **Iterate through left subarray sums:** For each subset sum in the `leftSide`, use binary search on the sorted `rightSide` subset sums to find the closest sum that minimizes the difference between the two subset sums.
5.  **Return the minimum difference:** After iterating through all possible elements in `leftSide`'s list of sums, the algorithm returns the final `result`, which represents the minimum difference discovered between the sum of two subsets of the original array.

**Time complexity:** O(2^2^\*log(2^n^))
**Space complexity:** O(n^2^)

### [32. Longest Valid Parentheses (Bonus)](https://leetcode.com/problems/longest-valid-parentheses/)

> Given a string containing just the characters `'('` and `')'`, return the length of the longest valid (well-formed) parentheses substring.

This algorithm finds the length of the longest valid parentheses substring in a given string. It uses a stack to track the indices of unmatched opening parentheses and an auxiliary array to mark valid pairs of parentheses.

1.  **Track Parentheses Indices**: The algorithm iterates through the string and uses a stack to record the indices of unmatched opening parentheses. For each closing parenthesis, it matches it with the most recent unmatched opening parenthesis from the stack.

2.  **Mark Valid Parentheses**: As pairs are matched, it updates a `record` array to mark the positions of valid parentheses pairs.

3.  **Calculate Longest Valid Substring**: After processing the entire string, the algorithm splits the `record` array on zeros to isolate contiguous valid parentheses substrings, computes their lengths, and identifies the maximum length among them.
