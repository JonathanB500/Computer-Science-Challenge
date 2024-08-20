var longestValidParentheses = function (s) {
  const record = new Array(s.length).fill(0);
  const openParentheses = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openParentheses.push(i);
    } else if (s[i] === ")" && openParentheses.length >= 1) {
      let lastParentheses = openParentheses.pop();
      record[lastParentheses] = 1;
      record[i] = 1;
    }
  }

  const validChains = record
    .join("")
    .split(0)
    .filter((i) => i !== "");
  const totalPerChain = validChains.map((i) => i.length);
  const longestChain = totalPerChain.sort((a, b) => b - a)[0];

  return longestChain | 0;
};
