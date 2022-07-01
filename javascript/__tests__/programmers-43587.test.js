const solution = require('../programmers-42587.js');

describe('스택/큐 > 프린터', () => {
  it('[2, 1, 3, 2], 2', () => {
    expect(solution([2, 1, 3, 2], 2)).toBe(1);
  });

  it('[1, 1, 9, 1, 1, 1], 0', () => {
    expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
  });

  it('[4, 7, 2, 1, 3, 9, 4], 4', () => {
    expect(solution([4, 7, 2, 1, 3, 9, 4], 4)).toBe(5);
  });
});
