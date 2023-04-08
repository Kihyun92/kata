import { expect, it } from "vitest"

function solution(n, delay, forget) {
  let peopleKnowing = 1;
  let sharedSecrets = 0;
  let day = 1;

  while (day <= n) {
      if (day >= delay) {
          let forgotSecrets = Math.floor((day - delay) / forget);
          sharedSecrets = peopleKnowing - forgotSecrets;
          peopleKnowing += sharedSecrets;
      }
      day++;
  }

  return peopleKnowing;
}

it('solution', () => {
  expect(solution(6, 2, 4)).toBe(5)
  expect(solution(4, 1, 3)).toBe(6)
})
