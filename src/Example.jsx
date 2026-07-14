import { useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { bookCss } from "./bookStyles.js";

// One book example, live on the site. Code on the left, the running screen on
// the right, fully editable — the same in-browser bundler the React docs use.
// The book's supplied stylesheet is preloaded as styles.css so the preview
// matches the printed screens. initMode "user-visible" boots each editor only
// when it scrolls into view, so a full page of live examples stays light.
export default function Example({ example, chapterNum }) {
  const [copied, setCopied] = useState(false);

  function copyLink() {
    const url = `${window.location.origin}${window.location.pathname}#/chapter/${chapterNum}/${example.id}`;
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <section className="example" id={example.id}>
      <div className="example-head">
        <div>
          <h3>{example.heading}</h3>
          <span className="chip">{example.instruction}</span>
        </div>
        <button className="link-btn" onClick={copyLink} title="Copy a link to this example">
          {copied ? "Link copied ✓" : "Copy link"}
        </button>
      </div>

      {example.intro && <p className="example-intro">{example.intro}</p>}

      <Sandpack
        template={example.template || "react"}
        theme="light"
        files={{
          [example.file || "/App.js"]: { code: example.code, active: true },
          "/styles.css": { code: bookCss, hidden: true },
        }}
        customSetup={
          example.dependencies ? { dependencies: example.dependencies } : undefined
        }
        options={{
          editorHeight: 480,
          showLineNumbers: true,
          showTabs: false,
          showConsoleButton: true,
          showConsole: example.code.includes("console."),
          editorWidthPercentage: 52,
          initMode: "user-visible",
        }}
      />
    </section>
  );
}
