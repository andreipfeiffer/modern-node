// import fs from "fs";
// import path from "path";
// import { globSync } from "glob";
import { globSync } from "node:fs";

const getMarkdownFiles = (dir) => {
  // OPTION 1
  // const files = fs.readdirSync("./");
  // return files.filter((file) => path.extname(file) === ".md");

  // OPTION 2
  return globSync(`./*.md`);
};

console.log("Markdown files:", getMarkdownFiles());
