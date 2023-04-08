import { expect, it } from "vitest"

const solution = (s) => {
  const sortedStr = s.split(' ').sort((a, b) => {
    const aNum = Number(a.slice(-1));
    const bNum = Number(b.slice(-1));
    return aNum - bNum;
  });
  return sortedStr.map(it => it.slice(0, -1)).join(' ');
}

it('solution', () => {
  expect(solution('20236 Iam2 today4 Hi1 Kihyun3 is5')).toBe('Hi Iam Kihyun today is 2023');
})