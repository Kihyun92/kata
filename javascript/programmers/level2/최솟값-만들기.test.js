// https://school.programmers.co.kr/learn/courses/30/lessons/12941?language=javascript
import { expect, it } from "vitest"

const solution = (a, b) => {
  const sortedA = a.sort((a, b) => a - b);
  const sortedB = b.sort((a, b) => b - a);

  return sortedA.reduce((acc, cur, index) => acc + cur * sortedB[index], 0);
}

it('solution', () => {
  expect(solution([1, 4, 2], [5, 4, 4])).toBe(29);
  expect(solution([1, 2], [3, 4])).toBe(10);
})
