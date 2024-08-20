var reverseOddLevels = function (root) {
  let queue = [{ node: root, level: 0 }];
  let rootOfOddNodes = {};

  while (queue.length > 0) {
    let { node, level } = queue.shift();
    if (level % 2 === 0) {
      if (!rootOfOddNodes[level]) {
        rootOfOddNodes[level] = [];
      }
      rootOfOddNodes[level].push(node);
    }

    if (node.left) {
      queue.push({ node: node.left, level: level + 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }

  rootOfOddNodes = Object.values(rootOfOddNodes);
  for (let level of rootOfOddNodes) {
    if (level[0].left) {
      while (level.length > 0) {
        const firstNode = level[0];
        const lastNode = level[level.length - 1];
        const tempNode = {
          left: { ...firstNode.left },
          right: { ...firstNode.right },
        };

        firstNode.left.val = lastNode.right.val;
        lastNode.right.val = tempNode.left.val;

        if (level.length > 1) {
          firstNode.right.val = lastNode.left.val;
          lastNode.left.val = tempNode.right.val;
        }

        level.shift();
        level.pop();
      }
    }
  }

  return root;
};
