// import * as uuid from "uuid";
import { randomUUID } from "node:crypto";

// const uid = uuid.v4();
const uid = randomUUID();

console.log({ uid });
