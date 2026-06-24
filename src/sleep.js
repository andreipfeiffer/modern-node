// import { setTimeout } from "node:timers/promises";
// import { deprecate } from "node:util";

const sleep = async (ms) =>
  new Promise((resolve) => global.setTimeout(resolve, ms));

const DELAY = 2000;

console.log(`⏳ Wait for ${DELAY}ms ...`);
await sleep(DELAY);
console.log(`⌛️ DONE`);
