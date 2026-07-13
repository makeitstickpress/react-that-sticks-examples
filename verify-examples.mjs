import { transformSync } from "esbuild";
import { chapters } from "./src/chapters.js";

const nameRe = {
  func: /function\s+([A-Z]\w*)/g,
  decl: /(?:const|let|var)\s+([A-Z]\w*)\s*=/g,
  cls: /class\s+([A-Z]\w*)/g,
  type: /type\s+([A-Z]\w*)/g,
};

function definedNames(code) {
  const names = new Set();
  for (const re of Object.values(nameRe)) {
    let m;
    while ((m = re.exec(code)) !== null) names.add(m[1]);
  }
  // imported identifiers: import X, { A, B } from "..."
  const importRe = /import\s+([\s\S]*?)\s+from\s+["'][^"']+["']/g;
  let im;
  while ((im = importRe.exec(code)) !== null) {
    const clause = im[1];
    for (const m of clause.matchAll(/[A-Za-z_$][\w$]*/g)) names.add(m[0]);
  }
  return names;
}

function usedComponents(code) {
  const used = new Set();
  for (const m of code.matchAll(/<([A-Z]\w*)/g)) used.add(m[1]);
  return used;
}

let failures = 0;
let count = 0;
for (const ch of chapters) {
  for (const ex of ch.examples) {
    count++;
    const where = `ch${ch.num} "${ex.id}"`;
    // 1. syntax / parse
    const isTs = ex.template === "react-ts" || (ex.file || "").endsWith(".tsx");
    const loader = isTs ? "tsx" : "jsx";
    try {
      transformSync(ex.code, { loader, jsx: "automatic" });
    } catch (e) {
      failures++;
      console.log(`SYNTAX FAIL ${where}: ${e.message.split("\n")[0]}`);
      continue;
    }
    // 2. undefined component references
    const defined = definedNames(ex.code);
    const undefinedComps = [...usedComponents(ex.code)].filter((n) => !defined.has(n));
    if (undefinedComps.length) {
      failures++;
      console.log(`UNDEFINED ${where}: ${undefinedComps.join(", ")}`);
    }
    // 3. must have a default export
    if (!/export\s+default/.test(ex.code)) {
      failures++;
      console.log(`NO DEFAULT EXPORT ${where}`);
    }
  }
}
console.log(`\nChecked ${count} examples across ${chapters.filter((c) => c.examples.length).length} chapters. Failures: ${failures}`);
process.exit(failures ? 1 : 0);
