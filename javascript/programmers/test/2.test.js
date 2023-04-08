import { expect, it } from "vitest"

const solution = (balls) => {
  const result = balls;
  while(result.length > 1) {
    for(let i = 0; i<result.length-1; i++) {
      // 충돌 가능한 경우
      if (result[i] * result[i+1] < 0) {
        result[i] += result[i+1];
        result.splice(i + 1, 1);
      }
    }

    if (result.length > 1) {
      if (result.every((it) => it >= 0) || result.every((it) => it <= 0)) {
        break;
      }
    }
  }

  return result.filter(it => it !== 0);
}

it('solution', () => {
  expect(solution([4, 7, -5])).toEqual([4, 2]);
  expect(solution([3, -3])).toEqual([]);
  expect(solution([8, 4, -13])).toEqual([-1]);
});
