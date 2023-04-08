// https://school.programmers.co.kr/learn/courses/30/lessons/12939

import { expect, it } from "vitest";

const solution = (s) => {
  const a = s.split(' ').map((it) => Number(it)).sort((a,b) => a-b)

  return `${a[0]} ${a[a.length-1]}`;
}

it('solution', () => {
  expect(solution("1 2 3 4")).toEqual("1 4");
  expect(solution("-1 -2 -3 -4")).toEqual("-4 -1");
  expect(solution("-1 -1")).toEqual("-1 -1");
});
