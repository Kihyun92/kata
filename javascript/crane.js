// https://programmers.co.kr/learn/courses/30/lessons/64061?language=jav

// 크레인 인형뽑기 게임

function solution(board, moves) {
  var answer = 0;
  const stack = [];
  moves.forEach(column => {
    const flag = stack.length;
    board.map((row) => {
      if (stack.length !== flag) return;

      const currentNumber = row[column - 1];
      if (currentNumber !== 0) {
        row[column - 1] = 0;
        if (stack.length > 0 && stack[stack.length - 1] === currentNumber) {
          answer += 2;
          // stack.slice(0, length - 1);
          return stack.pop();
        }
        return stack.push(currentNumber);
      }
      return;
    })
  })
  return answer;
}

module.exports = solution;
