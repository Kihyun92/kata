import { it, expect } from "vitest";

const solution = (s) => {
  if (s[0] === ')' || s[s.length - 1] === '(') return false;

  const stack = [];
  for(let i = 0; i<s.length; i++) {
    if(s[i] === '(') {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  return stack.length === 0;
}

it('올바른 괄호', () => {
  expect(solution("()()")).toBe(true);
});
