/**
 * 5.10 night
 * https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
 */

// https://github.com/mickey0524/leetcode/blob/master/1282.Group-the-People-Given-the-Group-Size-They-Belong-To.java
const groupThePeople = (groupSizes) => {
  let map = new Map();
  let res = [];
  // for (let i = 0; i < groupSizes.length; i++) {
  //   let g = groupSizes[i];
  //   if (!map.has(g)) {
  //     map.set(g, []);
  //   }
  // }
  // console.log(map);  // map no  problem

  for (let i = 0; i < groupSizes.length; i++) {
    let g = groupSizes[i];
    if (!map.has(g)) {
      map.set(g, []);
    }
    let l = map.get(g);
    l.push(i);
    if (l.length == g) {
      // console.log(l)
      res.push(l);
      l = [];
    }
  }
  return res;
};

const main = () => {
  let groupSizes = [3, 3, 3, 3, 3, 1, 3];
  console.log(groupThePeople(groupSizes));

};

main()