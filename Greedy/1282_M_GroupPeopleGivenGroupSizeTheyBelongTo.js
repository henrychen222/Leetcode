/**
 * 5.10 night 5.28 night debug
 * https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
 */

// https://github.com/mickey0524/leetcode/blob/master/1282.Group-the-People-Given-the-Group-Size-They-Belong-To.java
// Accepted --- 88ms 41.9MB 36.81%
const groupThePeople_mickey0524 = (groupSizes) => {
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
    // console.log(map);
    let l = map.get(g);
    // console.log("l is: ", l);
    l.push(i);
    if (l.length == g) {
      // console.log("l is: ", l);
      // console.log(typeof l);  

      // res.push(l);
      res.push(Object.values(l)); // fixed problem here, why l is object, should be array

      // console.log("res is: ", res);

      l.splice(0, l.length); // fixed problem here: clear()
      // l = [];
    }
  }
  return res;
};

// https://www.cnblogs.com/qinduanyinghua/p/12010648.html
// not fixed
const groupThePeople_cnblog = (groupSizes) => {
  let res = [];
  let mp = new Map();
  let value = [];
  let uniqueArr = unique(groupSizes);

  for (let i = 0; i < groupSizes.length; ++i) {
    for (const j of uniqueArr) {
      let index = getAllIndexes(groupSizes, j);
      value.push(index);
      // console.log(value);
      mp.set(groupSizes[i], value[i]);
    }
  }
  console.log(mp);
  for (const k of mp.keys()) {
    let i = k;
    let v = mp.get(k);
    let t = i;
    console.log(v); // problem
    console.log(t);
    for (let j = 0; j < v.length; ++j) {
      t[j % i] = v[j];
      if ((j + 1) % i == 0) {
        res.push(t);
      }
    }
  }
  return res;
};

const unique = (arr) => {
  return arr.filter((x, i, a) => {
    return a.indexOf(x) == i
  });
}

const unique2 = (arr) => {
  return [...new Set(arr)];
}

const getAllIndexes = (arr, val) => {
  let indexes = [],
    i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
}

const main = () => {
  let groupSizes = [3, 3, 3, 3, 3, 1, 3];
  let groupSizes2 = [2, 1, 3, 3, 3, 2];
  console.log(groupThePeople_mickey0524(groupSizes));
  console.log(groupThePeople_mickey0524(groupSizes2));

  console.log("");
  console.log(groupThePeople_cnblog(groupSizes));
  // console.log(unique(groupSizes));
  // console.log(unique2(groupSizes));

};

main()