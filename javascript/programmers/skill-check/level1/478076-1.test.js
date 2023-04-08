// https://programmers.co.kr/skill_checks/478076

import { it, expect } from 'vitest';

// 구해야하는것: 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수

// 계획
// 재귀로 숫자를 짝수면 2로 나누고
// 홀수면 3을 곱하고 1을 더한 수로 바꾸고
// 1이 될 때까지 반복한다.
// 그리고 반복 횟수를 반환한다.
// 이 과정에서 500번을 넘어가면 -1을 반환한다.
// num이 1인 경우 0을 반환한다.

const solution = (num) => {
  if (num === 1) return 0;
  let count = 0;

  while (num !== 1) {
    if (count >= 500) return -1;
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    count++;
  }
  return count;
}

it('solution', () => {
  expect(solution(6)).toBe(8);
  // expect(solution(16)).toBe(4);
  // expect(solution(626331)).toBe(-1);
});
