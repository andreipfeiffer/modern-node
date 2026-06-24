import isEqual from "lodash-es/isEqual.js";
// import cloneDeep from "lodash-es/cloneDeep.js";
// import { isDeepStrictEqual } from "node:util";

console.log("arrays  equal", isEqual([1, 2], [2, 1]));
console.log("objects equal", isEqual({ x: 1, y: 2 }, { y: 2, x: 1 }));

// const obj = { list: [{ x: 1 }, { y: 2 }] };
// const clone = cloneDeep(obj);

// clone.list[0].x = 99;
// console.log("obj  ", obj.list);
// console.log("clone", clone.list);
