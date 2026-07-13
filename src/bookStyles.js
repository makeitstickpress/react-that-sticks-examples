// The "supplied stylesheet" from the book's front matter (running-the-code).
// This is pasted into src/index.css by readers following along in a real Vite
// project. The sandbox loads the identical CSS so the live preview matches the
// screens printed in the book. Keep this byte-for-byte in sync with the book.
export const bookCss = `body {
  margin: 0;
  font-family: "Avenir Next", Avenir, "Trebuchet MS", Arial, sans-serif;
  background: #fff9ea;
  color: #18212f;
}

main {
  max-width: 34rem;
  margin: 0 auto;
  padding: 2rem 1.25rem;
}

h1 {
  margin: 0 0 0.25rem;
  font-size: 2rem;
  letter-spacing: -0.02em;
}

main > p,
header p {
  margin: 0 0 1.25rem;
  color: #5d6878;
}

.forecast-card {
  margin: 0 0 1rem;
  padding: 1rem 1.1rem;
  border: 2px solid #18212f;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 5px 5px 0 rgba(24, 33, 47, 0.16);
}

.forecast-category {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #9b4d00;
}

.forecast-card h2 {
  margin: 0.35rem 0 0.6rem;
  font-size: 1.15rem;
  line-height: 1.25;
}

.forecast-odds {
  display: flex;
  gap: 0.4rem;
  margin: 0 0 0.65rem;
  font-weight: 700;
}

.forecast-odds span {
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
}

.forecast-odds .yes {
  background: #dff2e5;
  color: #17653a;
}

.forecast-odds .no {
  background: #f6ddd7;
  color: #a13a28;
}

.forecast-meta {
  margin: 0 0 0.65rem;
  color: #5d6878;
}

.forecast-card > p:not(.forecast-category):not(.forecast-odds) {
  margin: 0 0 0.65rem;
  color: #5d6878;
}

.forecast-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  padding: 0.4rem 0.9rem;
  border: 2px solid #18212f;
  border-radius: 8px;
  background: #f2f5fb;
  box-shadow: 0 2px 0 rgba(24, 33, 47, 0.12);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

label {
  display: block;
  margin: 0 0 0.5rem;
  font-weight: 600;
}

input:not([type="checkbox"]),
select {
  margin: 0.25rem 0 0;
  padding: 0.35rem 0.5rem;
  border: 2px solid #18212f;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: inset 0 1px 2px rgba(24, 33, 47, 0.1);
  font: inherit;
}

form button {
  margin-top: 0.5rem;
}

button:focus-visible,
input:focus-visible,
select:focus-visible,
a:focus-visible {
  outline: 3px solid #f6c453;
  outline-offset: 2px;
}

nav {
  display: flex;
  gap: 1rem;
  margin: 0 0 1.25rem;
}

a {
  color: #9b4d00;
}
`;
