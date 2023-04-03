// https://school.programmers.co.kr/learn/courses/30/lessons/17681

//비밀지도의 암호를 해독하는 작업을 도와줄 프로그램을 작성하라.

// 주어진 지도를 각각 이진수로 바꾼다. 
// 이 둘을 합친다. 
// 합친거의 결과를 #과 공백을 이용해서 리턴한다. 

// const decToBin = (n, arr) => {
//   return arr.map(dec => {
//     let binary = dec.toString(2);
//     if (binary.length < n) {
//       for(i = 0; i < n-binary.length; i++) {
//         binary = "0" + binary;
//       }
//     }
//     return binary;
//   });
// }

const decToBin = (arr) => {
  return arr.map(dec => {
    return Number(dec.toString(2));
  });
}

const sum = (n,num1, num2) =>{
  let result = [];
  for(let i=0;i<n;i++){
    result.push(num1[i] + num2[i]);
  }
  return result;
};

test('sum',()=>{
  expect(sum(5,[1001, 10100, 11100, 10010, 1011], [11110, 1, 10101, 10001, 11100]))
  .toEqual([12111,10101,21201,20011,12111]);
})

const addBlank = (n, str) => {
  let row = str;
  const currentLength = str.length;
  if (currentLength < n) {
    for(i = 0; i < n - currentLength; i++) {
      row = "0" + row;
    }
  }
  return row;
}

const numToMap = (n, numbers) => {
  const splitNumbers = numbers.map(number => addBlank(n, number.toString()).split(''));
  return splitNumbers.map(row => row.map(number => number === '0' ? ' ' : '#' ).join(''));
}

function solution(n, arr1, arr2) {
  const num1 = decToBin(arr1);
  const num2 = decToBin(arr2);
  
  const sumArr = sum(n, num1, num2);

  return numToMap(n, sumArr);
}

test('solution',() => {
  expect(
    solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
    .toEqual(["#####","# # #", "### #", "#  ##", "#####"]);
  // expect(
  //   solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]))
  //   .toEqual(["######", "### #", "## ##", " #### ", " #####", "### # "]);
  // expect(
  //   solution(4, [0, 0, 0,0], [0,0, 0,1]))
  //   .toEqual(["    ","    ","    ","   #"]);
});
