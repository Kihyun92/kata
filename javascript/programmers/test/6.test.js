import { expect, it } from "vitest";

function solution(nums, k) {
  let n = nums.length;
  let prefixSums = new Array(n + 1).fill(0);
  let subarraySums = [];

  for (let i = 0; i < n; i++) {
    prefixSums[i + 1] = prefixSums[i] + nums[i];
  }

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      subarraySums.push(prefixSums[j] - prefixSums[i - 1]);
    }
  }

  subarraySums.sort((a, b) => a - b);

  return subarraySums[k - 1];
}

it('solution', () => {
  expect(solution([2,1,3], 4)).toBe(3)
})