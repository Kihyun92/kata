import { expect, it } from "vitest"

const solution = (schedules, newSchedule) => {
  let [newStart, newEnd] = newSchedule;

  for(let i = 0; i< schedules.length; i++) {
    const [start, end] = schedules[i];

    if (start <= newStart && newStart <= end  && end <= newEnd) {
      newStart = start;
    } else if (newStart <= start && start <= newEnd && newEnd <= end) {
      newEnd = end;
    } else if (start <= newStart && newEnd <= end) {
      newStart = start;
      newEnd = end;
    }
  }
  const result = schedules.filter(([start, end]) => {
    return !(newStart <= start && end <= newEnd);
  })

  const index = result.findIndex((it) => it[0] > newStart);
  result.splice(index === -1 ? result.length : index, 0, [newStart, newEnd]);

  return result;
}

it('solution', () => {
  expect(solution([[2,4],[6,10]],[3,5])).toEqual([[2,5],[6,10]]);
  expect(solution([[1,2],[3,6],[8,9],[10,12],[13,16]],[4,11]))
  .toEqual([[1,2],[3,12],[13,16]]);
});
