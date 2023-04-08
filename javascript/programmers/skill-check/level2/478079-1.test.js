// https://programmers.co.kr/skill_checks/478079
import { expect, it } from "vitest"

// 구해야하는것: 최소 객실의 수
// 한번 사용한 객실은 청소해야함 -> 퇴실시간 + 10분 

// 방법
// 1. 대실 시작 시간을 기준으로 오름차순 정렬
// 2. 같은 방을 쓸 수 있는 경우
//    현재 퇴실 시간 + 10분 <= 다음 대실 시작시간인 경우
//    다음 대실 종료시간 + 10분보다 같거나 큰 대실시작 시간이 있는 경우, 배열에 넣고, 원래 배열에서 뺀다
// 3. 같은 방을 쓸 수 없는 경우 
//    현재 퇴실 시간 + 10분 > 다음 대실 시작 시간인 경우
// 4. 방 배열의 길이를 리턴한다.

const bookSort = (book_time) => {
  // book time to min
  const bookTimeToMin = book_time.map(time => {
    const [startHour, startMin] = time[0].split(':').map((it) => Number(it));
    const start = startHour*60 + startMin;
    const [endHour, endMin] = time[1].split(':').map((it) => Number(it));
    const end = endHour*60 + endMin;
    return [start, end]
  })

  // sort
  const sortedTime = bookTimeToMin.sort((a,b)=>{
    return a[0] - b[0]
  })
  return sortedTime;
}

it('bookSort', () => {
  expect(bookSort([
    ["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]
  ])).toEqual([[850, 1160], [860, 920], [900, 1020], [1000, 1100], [1100, 1280]]);
});

const solution = (book_time) => {
  const sortedBook = bookSort(book_time);

  const room = [];

  while(sortedBook.length > 0) {
    const firstRoom = sortedBook[0];
    room.push([firstRoom]);
    
    for(i = 1; i < sortedBook.length; i++) {
      if (room[room.length - 1][] + 10 <= sortedBook[i][0]) {
        room[room.length -1].push(sortedBook[i]);

      }
    }
    
    // 2. 같은 방을 쓸 수 있는 경우
    //    현재 퇴실 시간 + 10분 <= 다음 대실 시작시간인 경우
    //    다음 대실 종료시간 + 10분보다 같거나 큰 대실시작 시간이 있는 경우, 배열에 넣고, 원래 배열에서 뺀다
  }
  return room.length;
}

it('solution', () => {
  expect(solution([["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]])).toBe(3);
});
