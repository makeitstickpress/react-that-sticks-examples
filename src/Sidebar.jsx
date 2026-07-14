import { NavLink } from "react-router-dom";
import { chapters, parts } from "./chapters.js";

// Full book outline: every chapter links to its live examples or, for the
// local-only chapters, to the run-it-locally note.
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <p className="brand-title">React That Sticks</p>
        <p className="brand-sub">Live examples</p>
      </div>

      <nav className="nav">
        {parts.map((partTitle, partIndex) => (
          <div key={partTitle} className="nav-part">
            <p className="nav-part-title">{partTitle}</p>
            <ul>
              {chapters
                .filter((c) => c.part === partIndex)
                .map((c) => {
                  const ready = c.examples.length > 0;
                  return (
                    <li key={c.num}>
                      <NavLink
                        to={`/chapter/${c.num}`}
                        className={({ isActive }) =>
                          "nav-link" +
                          (isActive ? " active" : "") +
                          (ready ? "" : " muted")
                        }
                      >
                        <span className="nav-num">{c.num}</span>
                        <span className="nav-text">{c.topic}</span>
                        {ready && <span className="nav-dot" title="Live examples" />}
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="sidebar-foot">
        <a
          className="assembled-link"
          href="https://stackblitz.com/github/makeitstickpress/forecast"
        >
          The assembled app →
        </a>
        <p>Every chapter's pieces, composed into the finished Forecast.</p>
      </div>
    </aside>
  );
}
