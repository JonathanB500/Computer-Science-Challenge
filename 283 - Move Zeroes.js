var moveZeroes = function (nums) {
  const locations = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      locations.push(i);
    }
  }

  for (let i = 0; i < locations.length; i++) {
    nums.splice(locations[i] - i, 1);
    nums.push(0);
  }

  return nums;
};
