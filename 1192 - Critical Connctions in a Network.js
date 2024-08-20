var criticalConnections = function (n, connections) {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const low = new Array(n).fill(0);
  const disc = new Array(n).fill(0);
  const visited = new Array(n).fill(false);
  const parent = new Array(n).fill(0);
  const result = [];
  let time = 0;

  const dfs = (u) => {
    visited[u] = true;
    disc[u] = time;
    low[u] = disc[u];
    time++;
    for (const v of graph[u]) {
      if (!visited[v]) {
        parent[v] = u;
        dfs(v);
        low[u] = Math.min(low[u], low[v]);
        if (low[v] > disc[u]) {
          result.push([u, v]);
        }
      } else if (parent[u] !== v) {
        low[u] = Math.min(low[u], disc[v]);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }

  return result;
};
