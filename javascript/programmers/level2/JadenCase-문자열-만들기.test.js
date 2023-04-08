// https://school.programmers.co.kr/learn/courses/30/lessons/12951

import { expect, it } from "vitest";

const solution = (s) => {
  return s.split(' ').map((it) => it ? it[0].toUpperCase() + it.slice(1).toLowerCase() : '').join(' ')
};

it('solution', () => {
  expect(solution("3people  unFollowed me")).toEqual("3people  Unfollowed Me");
  expect(solution("3peOple unFollowed me")).toEqual("3people Unfollowed Me");
  expect(solution("for the last week")).toEqual("For The Last Week");
});
