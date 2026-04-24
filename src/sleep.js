import { setTimeout } from "node:timers/promises";
import { deprecate } from "node:util";

const sleep = deprecate(
  async (ms) => new Promise((resolve) => global.setTimeout(resolve, ms)),
  `sleep is deprecated. Please use setTimeout from node:timers/promises instead`,
);

const DELAY = 2000;

await sleep(100);

console.log(`⏳ Wait for ${DELAY}ms ...`);
await setTimeout(DELAY);
console.log(`⌛️ DONE`);

await sleep(100);
