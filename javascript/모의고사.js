// // https://programmers.co.kr/learn/courses/30/lessons/42840

// function counter (answers, pattern) {
//   let count = 0;
//   const patternLength = pattern.length;

//   answers.forEach((answer, index) => {
//     if (answer === pattern[index % patternLength]) count++;
//   });

//   return count;
// }

// function compare (arr) {
//   // return arr.sort((a, b) => a-b).filter(item => arr[0] === item);
//   return arr.sort((a, b) => a-b).filter(item => arr[0] === item).length > 1 ? :  ;
// }

// function solution (answers) {
//   const patterns = [
//     [1, 2, 3, 4, 5],
//     [2, 1, 2, 3, 2, 4, 2, 5],
//     [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
//   ];

//   const totalCounts = patterns.map(pattern => counter(answers, pattern));
//   console.log('totalCount::: ', totalCounts);
//   return compare(totalCounts);
// }

// module.exports = solution;
