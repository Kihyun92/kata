// https://programmers.co.kr/learn/courses/30/lessons/64061?language=jav

// 크레인 인형뽑기 게임

function solution(board, moves) {
  let answer = 0;

  const bucket = [];
  moves.forEach(column => {
    const bucketCount = bucket.length;
    board.map((row) => {
      if (bucket.length !== bucketCount) return;

      const target = row[column - 1];
      if (target === 0) return;

      row[column - 1] = 0;
      if (bucket.length > 0 && bucket[bucket.length - 1] === target) {
        answer += 2;

        return bucket.pop();
      }
      return bucket.push(target);
    })
  });
  return answer;
}

module.exports = solution;
