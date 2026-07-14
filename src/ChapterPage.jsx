import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Example from "./Example.jsx";
import { getChapter, chapters } from "./chapters.js";

export default function ChapterPage() {
  const { num, exampleId } = useParams();
  const chapter = getChapter(num);

  useEffect(() => {
    document.title = chapter
      ? `Ch ${chapter.num} · ${chapter.title} — React That Sticks`
      : "React That Sticks — Live Examples";
  }, [chapter]);

  // Deep link support: /chapter/1/your-turn scrolls to that example.
  useEffect(() => {
    if (exampleId) {
      const el = document.getElementById(exampleId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [num, exampleId]);

  if (!chapter) {
    return (
      <div className="chapter">
        <p>Chapter not found.</p>
        <Link to="/chapter/1">Go to Chapter 1</Link>
      </div>
    );
  }

  const index = chapters.findIndex((c) => c.num === chapter.num);
  const prev = chapters[index - 1];
  const next = chapters[index + 1];
  const ready = chapter.examples.length > 0;

  return (
    <div className="chapter">
      <header className="chapter-head">
        <p className="chapter-kicker">
          Chapter {chapter.num} · {chapter.topic}
        </p>
        <h1>{chapter.title}</h1>
      </header>

      {ready ? (
        <>
          <p className="chapter-lede">
            Every block below is live. Edit the code and the screen updates — the
            same in-browser sandbox the React docs use, loaded with the book's own
            stylesheet. Examples boot as you scroll to them.
          </p>
          {chapter.examples.map((example) => (
            <Example key={example.id} example={example} chapterNum={chapter.num} />
          ))}
        </>
      ) : (
        <div className="env-note">
          <p className="env-note-tag">Run these in your local project</p>
          <p>{chapter.envNote}</p>
          <p>
            Prefer not to install anything? The finished Forecast app — with
            this chapter's pieces and the data server included — runs complete
            in your browser:{" "}
            <a
              className="text-link"
              href="https://stackblitz.com/github/makeitstickpress/forecast"
            >
              open it on StackBlitz →
            </a>{" "}
            (if it stalls while loading, turn off your ad blocker for
            stackblitz.com — its in-browser runtime is often mistaken for a tracker)
          </p>
          <Link className="text-link" to="/chapter/1">
            ← Back to Chapter 1
          </Link>
        </div>
      )}

      <nav className="chapter-nav">
        {prev ? (
          <Link className="chapter-nav-link prev" to={`/chapter/${prev.num}`}>
            <span className="dir">Previous</span>
            <span className="label">
              {prev.num}. {prev.topic}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link className="chapter-nav-link next" to={`/chapter/${next.num}`}>
            <span className="dir">Next</span>
            <span className="label">
              {next.num}. {next.topic}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
