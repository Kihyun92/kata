import { expect, it } from "vitest";

const solution = (n) => {
  // dp[i]는 합이 i인 제곱수의 최소 개수를 나타냅니다.
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  
  return dp[n];
};


it('solution', () => {
  expect(solution(12)).toBe(3);
  expect(solution(13)).toBe(2);
})