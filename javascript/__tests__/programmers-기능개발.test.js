// import { solution } from "../programmers-기능개발";
const solution = require('../programmers-기능개발.js');

describe('기능개발', () => {
  it('solution', () => {
    expect(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])).toEqual([1, 3, 2]);
  });
});
