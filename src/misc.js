// import isEqual from "lodash-es/isEqual.js";
// import cloneDeep from "lodash-es/cloneDeep.js";
import { isDeepStrictEqual } from "node:util";

// console.log("arrays  equal", isDeepStrictEqual([1, 2], [2, 1]));
// console.log("objects equal", isDeepStrictEqual({ x: 1, y: 2 }, { y: 2, x: 1 }));

const obj = { list: [{ x: 1 }, { y: 2 }] };
const clone = global.structuredClone(obj);

clone.list[0].x = 99;
console.log("obj  ", obj.list);
console.log("clone", clone.list);

// const original_date = new Date();
// const cloned_date = structuredClone(original_date);
// const lodash_cloned_date = cloneDeep(original_date);
// const json_cloned_date = JSON.parse(JSON.stringify(original_date));
