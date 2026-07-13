// Writes the book's supplied stylesheet (src/bookStyles.js) to
// public/book-styles.css so the deployed site serves it as a plain CSS file
// at /react-that-sticks-examples/book-styles.css. The book's front matter
// links there for readers who would rather copy than type. Runs before every
// build so the file can never drift from the sandbox styles.
import { writeFileSync, mkdirSync } from "node:fs";
import { bookCss } from "./src/bookStyles.js";

const header = `/* React That Sticks — the supplied stylesheet.
 * Copy everything in this file into src/index.css of your project.
 * See the "Make it look like the book" section at the front of the book. */

`;

mkdirSync("public", { recursive: true });
writeFileSync("public/book-styles.css", header + bookCss);
console.log("Wrote public/book-styles.css");
