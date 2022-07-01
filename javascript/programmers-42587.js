function solution (priorities, location) {
  const orderedPriorities = priorities.map((priority, index) => ({ index, priority}));
  return getMyDocsOrder(orderedPriorities, location);
}

function getMyDocsOrder(orderedPriorities, location, order = 1) {
  const maxPriority = getMaxPriority(orderedPriorities);

  if (orderedPriorities[0].priority === maxPriority) {
      // check is my doc?
      if (orderedPriorities[0].index === location) {
          return order;
      }
      return getMyDocsOrder(orderedPriorities.slice(1), location, order + 1);
  }
  // Move the first element to the end of array
  return getMyDocsOrder([...orderedPriorities.slice(1), orderedPriorities[0]], location, order);
}

function getMaxPriority(orderedPriorities) {
  return Math.max(...(orderedPriorities.map(it => it.priority)));
}

module.exports = solution;

// [4, 7, 2, 1, 3, 9, 4], 4 // 3

// 7 2 1 3 9 4 4
// 2 1 3 9 4 4 7
// 1 3 9 4 4 7 2
// 3 9 4 4 7 2 1
// 9 4 4 7 2 1 3
// 4 4 7 2 1 3 / 9
// 4 7 2 1 3 4 / 9
// 7 2 1 3 4 4 / 9
// 2 1 3 4 4 / 9 7
// 1 3 4 4 2 / 9 7
// 3 4 4 2 1 / 9 7
// 4 4 2 1 3 / 9 7
// 4 2 1 3 / 9 7 4
// 2 1 3 / 9 7 4 4
// 1 3 2 / 9 7 4 4
// 3 2 1 / 9 7 4 4
// 2 1 / 9 7 4 4 3 // 5번째로 인쇄