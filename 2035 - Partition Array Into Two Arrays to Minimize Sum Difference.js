function minimumDifference(nums) {
  const n = Math.floor(nums.length / 2);
  const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
  const leftSide = nums.slice(0, n);
  const rightSide = nums.slice(n);

  const getAllSums = (arr) => {
    const N = arr.length;
    const sumsBySize = Array(N + 1)
      .fill(null)
      .map(() => []);

    const findSubsets = (index, currentSum, currentSize) => {
      if (index === N) {
        sumsBySize[currentSize].push(currentSum);
        return;
      }

      findSubsets(index + 1, currentSum + arr[index], currentSize + 1);
      findSubsets(index + 1, currentSum, currentSize);
    };

    findSubsets(0, 0, 0);
    return sumsBySize.filter((sums) => sums.length > 0);
  };

  const left = getAllSums(leftSide);
  const right = getAllSums(rightSide);

  right.map((i) => i.sort((a, b) => a - b));

  let result = Math.min(
    Math.abs(totalSum - 2 * left[n][0]),
    Math.abs(totalSum - 2 * right[n][0])
  );

  const lowerBound = (nums, target) => {
    let left = 0;
    let right = nums.length;

    while (left < right) {
      const mid = Math.floor(left + (right - left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  };

  for (let i = 1; i < n; i++) {
    left[i].forEach((a) => {
      const b = (totalSum - 2 * a) / 2;
      const rightIndex = n - i;
      const v = right[rightIndex];
      const idx = lowerBound(v, b);

      if (idx !== v.length) {
        result = Math.min(result, Math.abs(totalSum - 2 * (a + v[idx])));
      }
    });
  }

  return result;
}
