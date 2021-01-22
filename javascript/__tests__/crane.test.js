const solution = require('../crane.js');

describe('crain', () => {
  it('solution', () => {
    const board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
    const moves = [1, 5, 3, 5, 1, 2, 1, 4];
    const answer = 4;
    expect(solution(board, moves)).toBe(answer);
  });
});
