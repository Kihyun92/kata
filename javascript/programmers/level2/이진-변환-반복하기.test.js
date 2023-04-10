// https://school.programmers.co.kr/learn/courses/30/lessons/70129

import { expect, it } from "vitest";

const solution = (s) => {
  let count = 0;
  let removedZeroCount = 0;

  while (s !== '1') {
    const removedZeroSLength = s.replaceAll('0', '').length;
    removedZeroCount += s.length - removedZeroSLength;

    s = removedZeroSLength.toString(2);
    count++;
  }

  return [count, removedZeroCount];
}

it('solution', () => {
  expect(solution('110010101001')).toEqual([3, 8]);
  expect(solution('01110')).toEqual([3, 3]);
  expect(solution('1111111')).toEqual([4, 1]);
});
