// https://programmers.co.kr/skill_checks/478076?challenge_id=949

import { expect, it } from "vitest"

// 구해야하는것 : n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴

const solution = (n) => {
  const number = Math.sqrt(n);
  return Number.isInteger(number) ? Math.pow(number+1,2) : -1
}

it('solution',() =>{
  expect(solution(121)).toBe(144)
  expect(solution(3)).toBe(-1)
});
