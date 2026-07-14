// The book's chapter map, mirroring the printed table of contents (three parts,
// 22 chapters). Each chapter carries its runnable `examples`, composed from the
// manuscript as complete, self-contained App.jsx modules so they run on their
// own in the sandbox.
//
// Chapters whose examples need a real server, test runner, or build step carry
// an `envNote` instead of examples — they run in the local project environment
// the book sets up, not an inline sandbox.

export const parts = [
  "Part One · The building blocks",
  "Part Two · Real data on the screen",
  "Part Three · Larger React projects",
];

const ch1 = [
  {
    id: "first-component",
    heading: "Your first component",
    instruction: "Worked example",
    intro:
      "A component is a JavaScript function that returns markup. React calls the function wherever it sees a capitalized tag like <ForecastCard />.",
    code: `function ForecastCard() {
  return (
    <article className="forecast-card">
      <p className="forecast-category">Space</p>
      <h2>Will a crewed mission orbit Mars before 2035?</h2>
      <p className="forecast-odds">
        <span className="yes">42% Yes</span>
        <span className="no">58% No</span>
      </p>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <h1>Forecast</h1>
      <ForecastCard />
    </main>
  );
}
`,
  },
  {
    id: "use-it-three-times",
    heading: "Use it more than once",
    instruction: "Worked example",
    intro:
      "Write the tag three times and React calls the component three times, rendering three identical cards. Try adding a fourth.",
    code: `function ForecastCard() {
  return (
    <article className="forecast-card">
      <p className="forecast-category">Space</p>
      <h2>Will a crewed mission orbit Mars before 2035?</h2>
      <p className="forecast-odds">
        <span className="yes">42% Yes</span>
        <span className="no">58% No</span>
      </p>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <h1>Forecast</h1>
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
    </main>
  );
}
`,
  },
  {
    id: "your-turn",
    heading: "Your turn: create two components",
    instruction: "Exercise",
    intro:
      "Fill in the Header and ForecastCard so the page shows the Technology forecast (28% Yes · 72% No). The answer is one panel down.",
    code: `function Header() {
  return (
    <header>
      {/* heading and tagline go here */}
    </header>
  );
}

function ForecastCard() {
  return (
    <article className="forecast-card">
      {/* category, question, and odds go here */}
    </article>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <ForecastCard />
    </main>
  );
}
`,
  },
  {
    id: "answer",
    heading: "One possible answer",
    instruction: "Answer",
    intro:
      "Both components start with a capital letter, both return markup, and App uses both tags.",
    code: `function Header() {
  return (
    <header>
      <h1>Forecast</h1>
      <p>What happens next? Ask the crowd.</p>
    </header>
  );
}

function ForecastCard() {
  return (
    <article className="forecast-card">
      <p className="forecast-category">Technology</p>
      <h2>
        Will a new battery chemistry
        reach mass production this year?
      </h2>
      <p className="forecast-odds">
        <span className="yes">28% Yes</span>
        <span className="no">72% No</span>
      </p>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <ForecastCard />
    </main>
  );
}
`,
  },
];

const ch2 = [
  {
    id: "three-cards",
    heading: "One component, three different cards",
    instruction: "Worked example",
    intro:
      "Each tag passes different props to the same component. Try changing a category or the odds — only that card changes.",
    code: `function ForecastCard(props) {
  return (
    <article className="forecast-card">
      <p className="forecast-category">{props.category}</p>
      <h2>{props.question}</h2>
      <p className="forecast-odds">
        <span className="yes">{props.yes}% Yes</span>
        <span className="no">{props.no}% No</span>
      </p>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <h1>Forecast</h1>
      <ForecastCard
        category="Space"
        question="Mars orbit before 2035?"
        yes="42"
        no="58"
      />
      <ForecastCard
        category="Technology"
        question="New battery tech this year?"
        yes="28"
        no="72"
      />
      <ForecastCard
        category="Climate"
        question="New summer heat record?"
        yes="61"
        no="39"
      />
    </main>
  );
}
`,
  },
  {
    id: "your-turn",
    heading: "Your turn: add a new forecast",
    instruction: "Exercise",
    intro:
      "Fill in the empty props so the card shows the Energy forecast: 54% Yes, 46% No.",
    code: `function ForecastCard(props) {
  return (
    <article className="forecast-card">
      <p className="forecast-category">{props.category}</p>
      <h2>{props.question}</h2>
      <p className="forecast-odds">
        <span className="yes">{props.yes}% Yes</span>
        <span className="no">{props.no}% No</span>
      </p>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <h1>Forecast</h1>
      <ForecastCard
        category=""
        question=""
        yes=""
        no=""
      />
    </main>
  );
}
`,
  },
  {
    id: "answer",
    heading: "One possible answer",
    instruction: "Answer",
    intro: "Each attribute on the tag becomes a property on the props object.",
    code: `function ForecastCard(props) {
  return (
    <article className="forecast-card">
      <p className="forecast-category">{props.category}</p>
      <h2>{props.question}</h2>
      <p className="forecast-odds">
        <span className="yes">{props.yes}% Yes</span>
        <span className="no">{props.no}% No</span>
      </p>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <h1>Forecast</h1>
      <ForecastCard
        category="Energy"
        question="Will grid storage capacity double before 2030?"
        yes="54"
        no="46"
      />
    </main>
  );
}
`,
  },
];

const ch3 = [
  {
    id: "values-and-text",
    heading: "Values and text can mix",
    instruction: "Worked example",
    intro:
      "Braces evaluate a JavaScript expression. The numbers come from variables; the percent signs and words stay as text. Change yes to 37 and watch both values update.",
    code: `export default function ForecastCard() {
  const yes = 42;
  const no = 100 - yes;

  return (
    <article className="forecast-card">
      <p className="forecast-category">Space</p>
      <h2>Mars orbit before 2035?</h2>
      <p className="forecast-odds">
        <span className="yes">{yes}% Yes</span>
        <span className="no">{no}% No</span>
      </p>
    </article>
  );
}
`,
  },
  {
    id: "your-turn",
    heading: "Your turn: calculate the missing odds",
    instruction: "Exercise",
    intro:
      "The forecast has a 37% Yes chance. Replace the placeholder so the card works out the No odds itself. The answer is one panel down.",
    code: `export default function ForecastCard() {
  const yes = 37;
  const no = 0; /* your calculation */

  return (
    <article className="forecast-card">
      <p className="forecast-category">Energy</p>
      <h2>Will grid storage double before 2030?</h2>
      <p className="forecast-odds">
        <span className="yes">{yes}% Yes</span>
        <span className="no">
          {/* add the No value */}
        </span>
      </p>
    </article>
  );
}
`,
  },
  {
    id: "answer",
    heading: "One possible answer",
    instruction: "Answer",
    intro:
      "The No value is 100 minus Yes, worked out with a brace expression rather than typed by hand.",
    code: `export default function ForecastCard() {
  const yes = 37;
  const no = 100 - yes;

  return (
    <article className="forecast-card">
      <p className="forecast-category">Energy</p>
      <h2>Will grid storage double before 2030?</h2>
      <p className="forecast-odds">
        <span className="yes">{yes}% Yes</span>
        <span className="no">{no}% No</span>
      </p>
    </article>
  );
}
`,
  },
];

const ch4 = [
  {
    id: "sections",
    heading: "Split the page into components",
    instruction: "Worked example",
    intro:
      "PageHeader and ForecastSection are components rendered by App — and the card between ForecastSection's tags reaches it as props.children.",
    code: `function ForecastCard(props) {
  return (
    <article className="forecast-card">
      <p className="forecast-category">{props.category}</p>
    </article>
  );
}

function PageHeader() {
  return (
    <header>
      <h1>Forecast</h1>
      <p>What happens next? Ask the crowd.</p>
    </header>
  );
}

function ForecastSection(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
}

export default function App() {
  return (
    <main>
      <PageHeader />
      <ForecastSection title="Trending forecasts">
        <ForecastCard category="Space" />
        <ForecastCard category="Climate" />
      </ForecastSection>
      <ForecastSection title="Closing soon">
        <ForecastCard category="Energy" />
      </ForecastSection>
    </main>
  );
}
`,
  },
  {
    id: "your-turn",
    heading: "Your turn: make a section",
    instruction: "Exercise",
    intro:
      "Finish ForecastGroup so it draws its title and shows the JSX nested inside it. The answer is one panel down.",
    code: `function ForecastCard(props) {
  return (
    <article className="forecast-card">
      <p className="forecast-category">{props.category}</p>
    </article>
  );
}

function ForecastGroup(props) {
  return (
    <section>
      <h2>{/* show the title */}</h2>
      {/* show the nested JSX */}
    </section>
  );
}

export default function App() {
  return (
    <ForecastGroup title="Closing soon">
      <ForecastCard category="Energy" />
    </ForecastGroup>
  );
}
`,
  },
  {
    id: "answer",
    heading: "One possible answer",
    instruction: "Answer",
    intro:
      "ForecastGroup shows its title and renders the nested cards passed as children.",
    code: `function ForecastCard(props) {
  return (
    <article className="forecast-card">
      <p className="forecast-category">{props.category}</p>
    </article>
  );
}

function ForecastGroup(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
}

export default function App() {
  return (
    <ForecastGroup title="Closing soon">
      <ForecastCard category="Energy" />
    </ForecastGroup>
  );
}
`,
  },
];

const ch5 = [
  {
    id: "map-list",
    heading: "Render a list from an array",
    instruction: "Worked example",
    intro:
      "map() transforms the array of forecasts into an array of cards. Try adding a fourth object to the array — a fourth card appears, no new JSX needed.",
    code: `const forecasts = [
  { id: "mars-orbit", category: "Space", question: "Mars orbit before 2035?", yes: 42 },
  { id: "battery", category: "Technology", question: "New battery tech this year?", yes: 28 },
  { id: "heat-record", category: "Climate", question: "New summer heat record?", yes: 61 },
];

function ForecastCard(props) {
  return (
    <article className="forecast-card">
      <p className="forecast-category">{props.category}</p>
      <h2>{props.question}</h2>
      <p className="forecast-odds">
        <span className="yes">{props.yes}% Yes</span>
        <span className="no">{props.no}% No</span>
      </p>
    </article>
  );
}

function ForecastList() {
  return (
    <section>
      <h2>Trending forecasts</h2>
      {forecasts.map((forecast) => (
        <ForecastCard
          key={forecast.id}
          category={forecast.category}
          question={forecast.question}
          yes={forecast.yes}
          no={100 - forecast.yes}
        />
      ))}
    </section>
  );
}

export default function App() {
  return (
    <main>
      <h1>Forecast</h1>
      <ForecastList />
    </main>
  );
}
`,
  },
  {
    id: "your-turn",
    heading: "Your turn: render one more forecast",
    instruction: "Exercise",
    intro:
      "Finish the map call: add the stable key and read each forecast's category. Until the key is there, React reports the missing key in the console. The answer is one panel down.",
    code: `const forecasts = [
  { id: "mars-orbit", category: "Space", question: "Mars orbit before 2035?", yes: 42 },
  { id: "battery", category: "Technology", question: "New battery tech this year?", yes: 28 },
  { id: "heat-record", category: "Climate", question: "New summer heat record?", yes: 61 },
];

function ForecastCard(props) {
  return (
    <article className="forecast-card">
      <p className="forecast-category">{props.category}</p>
      <h2>{props.question}</h2>
      <p className="forecast-odds">
        <span className="yes">{props.yes}% Yes</span>
        <span className="no">{props.no}% No</span>
      </p>
    </article>
  );
}

function ForecastList() {
  return (
    <section>
      {forecasts.map((forecast) => (
        <ForecastCard
          question={forecast.question}
          yes={forecast.yes}
          no={100 - forecast.yes}
        />
      ))}
    </section>
  );
}

export default function App() {
  return (
    <main>
      <h1>Forecast</h1>
      <ForecastList />
    </main>
  );
}
`,
  },
  {
    id: "answer",
    heading: "One possible answer",
    instruction: "Answer",
    intro:
      "The key comes from the stored forecast ID, and the category is read off the current object like every other field.",
    code: `const forecasts = [
  { id: "mars-orbit", category: "Space", question: "Mars orbit before 2035?", yes: 42 },
  { id: "battery", category: "Technology", question: "New battery tech this year?", yes: 28 },
  { id: "heat-record", category: "Climate", question: "New summer heat record?", yes: 61 },
];

function ForecastCard(props) {
  return (
    <article className="forecast-card">
      <p className="forecast-category">{props.category}</p>
      <h2>{props.question}</h2>
      <p className="forecast-odds">
        <span className="yes">{props.yes}% Yes</span>
        <span className="no">{props.no}% No</span>
      </p>
    </article>
  );
}

function ForecastList() {
  return (
    <section>
      {forecasts.map((forecast) => (
        <ForecastCard
          key={forecast.id}
          category={forecast.category}
          question={forecast.question}
          yes={forecast.yes}
          no={100 - forecast.yes}
        />
      ))}
    </section>
  );
}

export default function App() {
  return (
    <main>
      <h1>Forecast</h1>
      <ForecastList />
    </main>
  );
}
`,
  },
];

const ch6 = [
  {
    id: "local-variable",
    heading: "When a regular variable isn't enough",
    instruction: "Worked example",
    intro:
      "Click Technology. The label never changes — but the console below shows the handler really ran. Local variables don't survive renders, and changing them doesn't trigger one.",
    code: `export default function App() {
  let category = "All";

  function chooseTechnology() {
    category = "Technology";
    console.log(category);
  }

  return (
    <main>
      <p>Selected: {category}</p>
      <button onClick={chooseTechnology}>
        Technology
      </button>
    </main>
  );
}
`,
  },
  {
    id: "working-state",
    heading: "Update state after the click",
    instruction: "Replace App.jsx",
    intro:
      "The variable becomes state, the assignment becomes a setter call. Click Technology: the setter stores the next value and triggers another render.",
    code: `import { useState } from "react";

export default function App() {
  const [category, setCategory] = useState("All");

  function chooseTechnology() {
    setCategory("Technology");
  }

  return (
    <main>
      <p>Selected: {category}</p>
      <button onClick={chooseTechnology}>
        Technology
      </button>
    </main>
  );
}
`,
  },
  {
    id: "log-after-setter",
    heading: "A handler uses the values of its render",
    instruction: "Worked example",
    intro:
      "Click Technology and read the console: both logs show All. The handler closed over this render's value — the setter stores the next value, it doesn't change this one.",
    code: `import { useState } from "react";

export default function App() {
  const [category, setCategory] = useState("All");

  function chooseTechnology() {
    console.log(category);
    setCategory("Technology");
    console.log(category);
  }

  return (
    <main>
      <p>Selected: {category}</p>
      <button onClick={chooseTechnology}>
        Technology
      </button>
    </main>
  );
}
`,
  },
  {
    id: "your-turn",
    heading: "Your turn: add another category",
    instruction: "Exercise",
    intro:
      "Add a Space button that calls setCategory(\"Space\"). The answer is one panel down.",
    code: `import { useState } from "react";

export default function App() {
  const [category, setCategory] = useState("All");

  function chooseTechnology() {
    setCategory("Technology");
  }

  /* add chooseSpace here */

  return (
    <main>
      <p>Selected: {category}</p>
      <button onClick={chooseTechnology}>
        Technology
      </button>
      {/* add the Space button here */}
    </main>
  );
}
`,
  },
  {
    id: "answer",
    heading: "One possible answer",
    instruction: "Answer",
    intro:
      "Each button hands its own value to the same setter. Every click stores the next value and triggers another render.",
    code: `import { useState } from "react";

export default function App() {
  const [category, setCategory] = useState("All");

  function chooseTechnology() {
    setCategory("Technology");
  }

  function chooseSpace() {
    setCategory("Space");
  }

  return (
    <main>
      <p>Selected: {category}</p>
      <button onClick={chooseTechnology}>
        Technology
      </button>
      <button onClick={chooseSpace}>
        Space
      </button>
    </main>
  );
}
`,
  },
];

const ch7 = [
  {
    id: "watch-button",
    heading: "Update state from a click",
    instruction: "Worked example",
    intro:
      "onClick receives the function itself — passed, not called. Click Watch: the setter stores true, and the next render shows Watching.",
    code: `import { useState } from "react";

export default function ForecastCard() {
  const [isWatching, setIsWatching] = useState(false);

  function handleWatch() {
    setIsWatching(true);
  }

  return (
    <button onClick={handleWatch}>
      {isWatching
        ? "Watching"
        : "Watch"}
    </button>
  );
}
`,
  },
  {
    id: "your-turn",
    heading: "Your turn: select a filter",
    instruction: "Exercise",
    intro:
      "Complete the handler so the Technology button stores the category in state, then pass the handler to the button's onClick. The answer is one panel down.",
    code: `import { useState } from "react";

export default function CategoryFilter() {
  const [selected, setSelected] =
    useState("All");

  function handleTechnology() {
    /* store "Technology" */
  }

  return (
    <>
      <p>Selected: {selected}</p>
      <button>
        Technology
      </button>
    </>
  );
}
`,
  },
  {
    id: "answer",
    heading: "One possible answer",
    instruction: "Answer",
    intro:
      "The handler stores \"Technology\" in state, and onClick receives the function itself.",
    code: `import { useState } from "react";

export default function CategoryFilter() {
  const [selected, setSelected] =
    useState("All");

  function handleTechnology() {
    setSelected("Technology");
  }

  return (
    <>
      <p>Selected: {selected}</p>
      <button onClick={handleTechnology}>
        Technology
      </button>
    </>
  );
}
`,
  },
];

const ch8 = [
  {
    id: "controlled-input",
    heading: "Each keystroke updates state",
    instruction: "Worked example",
    intro:
      "This input is controlled: state supplies its value, and onChange stores each keystroke. Type in the field and watch the preview keep up.",
    code: `import { useState } from "react";

export default function ForecastForm() {
  const [confidence, setConfidence] = useState("");

  function handleChange(event) {
    setConfidence(event.target.value);
  }

  return (
    <>
      <label>
        Confidence
        <input
          type="number"
          min="0"
          max="100"
          value={confidence}
          onChange={handleChange}
        />
      </label>
      <p>Confidence: {confidence}%</p>
    </>
  );
}
`,
  },
  {
    id: "controlled-select",
    heading: "Select a choice from state too",
    instruction: "Worked example",
    intro:
      "A select works the same way: its value comes from state, and choosing an option stores the next value.",
    code: `import { useState } from "react";

export default function ForecastForm() {
  const [choice, setChoice] = useState("Yes");

  return (
    <>
      <label>
        Choice
        <select
          value={choice}
          onChange={(event) =>
            setChoice(event.target.value)
          }
        >
          <option>Yes</option>
          <option>No</option>
        </select>
      </label>
      <p>Choice: {choice}</p>
    </>
  );
}
`,
  },
  {
    id: "submit-form",
    heading: "Forms submit a browser event",
    instruction: "Worked example",
    intro:
      "preventDefault() stops the browser's full-page submit so your handler deals with it instead. Submit and read the console.",
    code: `import { useState } from "react";

export default function ForecastForm() {
  const [confidence, setConfidence] = useState("");
  const [choice, setChoice] = useState("Yes");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(\`Save \${choice} at \${confidence}%\`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Confidence
        <input
          type="number"
          min="0"
          max="100"
          value={confidence}
          onChange={(event) => setConfidence(event.target.value)}
        />
      </label>
      <label>
        Choice
        <select
          value={choice}
          onChange={(event) => setChoice(event.target.value)}
        >
          <option>Yes</option>
          <option>No</option>
        </select>
      </label>
      <button type="submit">Save prediction</button>
    </form>
  );
}
`,
  },
  {
    id: "submitted-state",
    heading: "Keep submitted state separate from editing state",
    instruction: "Worked example",
    intro:
      "Submitting stores a separate saved flag, and && shows the confirmation only once it's true.",
    code: `import { useState } from "react";

export default function ForecastForm() {
  const [confidence, setConfidence] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Confidence
        <input
          type="number"
          min="0"
          max="100"
          value={confidence}
          onChange={(event) => setConfidence(event.target.value)}
        />
      </label>
      <button>Save prediction</button>
      {submitted && (
        <p>Prediction saved.</p>
      )}
    </form>
  );
}
`,
  },
  {
    id: "your-turn",
    heading: "Your turn: control a note field",
    instruction: "Exercise",
    intro:
      "Give note a starting value of an empty string, then add the onChange handler. Until it has one, React marks the field read-only and says so in the console. The answer is one panel down.",
    code: `import { useState } from "react";

export default function ForecastForm() {
  const [note, setNote] =
    useState(); /* start with an empty string */

  return (
    <>
      <label>
        Note
        <input value={note} />
        {/* update state when it changes */}
      </label>
      <p>Note: {note}</p>
    </>
  );
}
`,
  },
  {
    id: "answer",
    heading: "One possible answer",
    instruction: "Answer",
    intro:
      "useState(\"\") keeps the field controlled from the first render, and onChange stores each keystroke.",
    code: `import { useState } from "react";

export default function ForecastForm() {
  const [note, setNote] =
    useState("");

  return (
    <>
      <label>
        Note
        <input
          value={note}
          onChange={(event) =>
            setNote(event.target.value)
          }
        />
      </label>
      <p>Note: {note}</p>
    </>
  );
}
`,
  },
];

const ch9 = [
  {
    id: "your-turn",
    heading: "Your turn: add a resolution message",
    instruction: "Exercise",
    intro:
      "When status is \"resolved\", show the outcome. Right now the card only shows the question.",
    code: `function ForecastCard(props) {
  return (
    <article className="forecast-card">
      <h2>{props.question}</h2>
      {/* when status is "resolved", show outcome */}
    </article>
  );
}

export default function App() {
  return (
    <ForecastCard
      status="resolved"
      outcome="No"
      question="Mars orbit before 2035?"
    />
  );
}
`,
  },
  {
    id: "answer",
    heading: "One possible answer",
    instruction: "Answer",
    intro:
      "The && operator renders the paragraph only when the left side is true. Change status to \"open\" and the line disappears.",
    code: `function ForecastCard(props) {
  return (
    <article className="forecast-card">
      <h2>{props.question}</h2>
      {props.status === "resolved" && (
        <p>Outcome: {props.outcome}</p>
      )}
    </article>
  );
}

export default function App() {
  return (
    <ForecastCard
      status="resolved"
      outcome="No"
      question="Mars orbit before 2035?"
    />
  );
}
`,
  },
];

const ch10 = [
  {
    id: "no-effect",
    heading: "Rendering cannot make time pass",
    instruction: "Worked example",
    intro:
      "This countdown shows 10 and never moves. A render happens once; nothing schedules the next tick.",
    code: `import { useState } from "react";

export default function ClosingClock() {
  const [secondsLeft, setSecondsLeft] = useState(10);

  return (
    <p>Closes in {secondsLeft} seconds</p>
  );
}
`,
  },
  {
    id: "working",
    heading: "An Effect starts the timer",
    instruction: "Worked example",
    intro:
      "The Effect starts an interval after the screen appears, and its cleanup clears it. Now the countdown ticks.",
    code: `import { useEffect, useState } from "react";

export default function ClosingClock() {
  const [secondsLeft, setSecondsLeft] = useState(10);
  const finished = secondsLeft === 0;

  useEffect(() => {
    if (finished) {
      return;
    }

    const intervalId = setInterval(() => {
      setSecondsLeft((current) =>
        Math.max(0, current - 1)
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [finished]);

  return <p>Closes in {secondsLeft} seconds</p>;
}
`,
  },
  {
    id: "answer",
    heading: "One possible answer",
    instruction: "Answer",
    intro: "The completed Effect: start the interval, and clear it on cleanup.",
    code: `import { useEffect, useState } from "react";

export default function ClosingClock() {
  const [secondsLeft, setSecondsLeft] =
    useState(10);
  const finished = secondsLeft === 0;

  useEffect(() => {
    if (finished) {
      return;
    }

    const intervalId = setInterval(() => {
      setSecondsLeft((current) =>
        Math.max(0, current - 1)
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [finished]);

  return <p>{secondsLeft} seconds</p>;
}
`,
  },
];

const ch14 = [
  {
    id: "use-countdown",
    heading: "Extract a custom Hook",
    instruction: "Worked example",
    intro:
      "The countdown logic moves into useCountdown, an ordinary function that calls Hooks. The component just calls it and renders the result.",
    code: `import { useEffect, useState } from "react";

function useCountdown(start) {
  const [secondsLeft, setSecondsLeft] =
    useState(start);

  const finished = secondsLeft === 0;

  useEffect(() => {
    if (finished) {
      return;
    }

    const intervalId = setInterval(() => {
      setSecondsLeft((current) =>
        Math.max(0, current - 1)
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [finished]);

  return secondsLeft;
}

export default function ClosingClock({ start = 10 }) {
  const secondsLeft = useCountdown(start);

  return <p>{secondsLeft} seconds</p>;
}
`,
  },
];

const ch15 = [
  {
    id: "lifting-state",
    heading: "Lift state to a shared parent",
    instruction: "Worked example",
    intro:
      "Both controls show the same fact because their shared parent owns the state and passes it down. Toggle either one — they can't disagree.",
    code: `import { useState } from "react";

function WatchButton({ isWatching, onToggle }) {
  return (
    <button onClick={onToggle}>
      {isWatching ? "Watching" : "Watch"}
    </button>
  );
}

function WatchCheckbox({ isWatching, onToggle }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={isWatching}
        onChange={onToggle}
      />
      Watch this forecast
    </label>
  );
}

export default function WatchArea() {
  const [isWatching, setIsWatching] = useState(false);
  const toggle = () => setIsWatching((value) => !value);

  return (
    <section>
      <WatchButton isWatching={isWatching} onToggle={toggle} />
      <WatchCheckbox isWatching={isWatching} onToggle={toggle} />
    </section>
  );
}
`,
  },
  {
    id: "context",
    heading: "Share a value through context",
    instruction: "Worked example",
    intro:
      "The account is provided once, near the top, with context. The badge and the form read it with useContext — no props relayed through the middle. Spend some credits and both update.",
    code: `import { createContext, useContext, useState } from "react";

const AccountContext = createContext(null);

function AccountBadge() {
  const account = useContext(AccountContext);
  return <p>{account.name} · {account.balance} credits</p>;
}

function Header() {
  return (
    <header>
      <h1>Forecast</h1>
      <AccountBadge />
    </header>
  );
}

function PredictionForm() {
  const { spend } = useContext(AccountContext);
  return <button onClick={() => spend(50)}>Spend 50 credits</button>;
}

export default function App() {
  const name = "Rory";
  const [balance, setBalance] = useState(250);

  function spend(amount) {
    setBalance((current) => current - amount);
  }

  return (
    <AccountContext.Provider value={{ name, balance, spend }}>
      <Header />
      <PredictionForm />
    </AccountContext.Provider>
  );
}
`,
  },
];

const ch16 = [
  {
    id: "reducer",
    heading: "Manage related state with a reducer",
    instruction: "Worked example",
    intro:
      "Every rule for updating the ticket lives in one reducer. The handlers just dispatch actions saying what happened — try choosing a side and submitting.",
    code: `import { useReducer } from "react";

const emptyTicket = { outcome: null, confidence: "", error: null };

function ticketReducer(ticket, action) {
  if (action.type === "chose_outcome") {
    return { ...ticket, outcome: action.outcome, error: null };
  }
  if (action.type === "changed_confidence") {
    return { ...ticket, confidence: action.confidence };
  }
  if (action.type === "cleared") {
    return { outcome: null, confidence: "", error: null };
  }
  return ticket;
}

export default function PredictionTicket() {
  const [ticket, dispatch] = useReducer(ticketReducer, emptyTicket);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: "cleared" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Outcome: {ticket.outcome || "—"}</p>
      <button type="button" onClick={() => dispatch({ type: "chose_outcome", outcome: "Yes" })}>
        Yes
      </button>
      <button type="button" onClick={() => dispatch({ type: "chose_outcome", outcome: "No" })}>
        No
      </button>
      <label>
        Confidence
        <input
          value={ticket.confidence}
          onChange={(event) => dispatch({ type: "changed_confidence", confidence: event.target.value })}
        />
      </label>
      <p>Confidence: {ticket.confidence}%</p>
      <button type="submit">Clear ticket</button>
    </form>
  );
}
`,
  },
  {
    id: "your-turn",
    heading: "Your turn: complete the reducer",
    instruction: "Exercise",
    intro:
      "The confidence field is not wired up: the reducer has no branch for it and the field dispatches nothing, so typing changes nothing. Add the branch and the dispatch. The answer is one panel down.",
    code: `import { useReducer } from "react";

const emptyTicket = { outcome: null, confidence: "", error: null };

function ticketReducer(ticket, action) {
  if (action.type === "chose_outcome") {
    return { ...ticket, outcome: action.outcome, error: null };
  }

  /* 1. when action.type is "changed_confidence",
        return a copy with the new confidence */

  if (action.type === "cleared") {
    return { outcome: null, confidence: "", error: null };
  }
  return ticket;
}

function ConfidenceField(props) {
  return (
    <label>
      Confidence
      <input
        value={props.ticket.confidence}
        onChange={(event) => {
          /* 2. dispatch changed_confidence
                with event.target.value */
        }}
      />
    </label>
  );
}

export default function PredictionTicket() {
  const [ticket, dispatch] = useReducer(ticketReducer, emptyTicket);

  return (
    <>
      <ConfidenceField ticket={ticket} dispatch={dispatch} />
      <p>Confidence: {ticket.confidence}%</p>
    </>
  );
}
`,
  },
  {
    id: "answer",
    heading: "One possible answer",
    instruction: "Answer",
    intro:
      "The new branch returns a copy of the ticket with the typed confidence, and the field dispatches the action that names what happened.",
    code: `import { useReducer } from "react";

const emptyTicket = { outcome: null, confidence: "", error: null };

function ticketReducer(ticket, action) {
  if (action.type === "chose_outcome") {
    return { ...ticket, outcome: action.outcome, error: null };
  }

  if (action.type === "changed_confidence") {
    return { ...ticket, confidence: action.confidence };
  }

  if (action.type === "cleared") {
    return { outcome: null, confidence: "", error: null };
  }
  return ticket;
}

function ConfidenceField(props) {
  return (
    <label>
      Confidence
      <input
        value={props.ticket.confidence}
        onChange={(event) => {
          props.dispatch({
            type: "changed_confidence",
            confidence: event.target.value,
          });
        }}
      />
    </label>
  );
}

export default function PredictionTicket() {
  const [ticket, dispatch] = useReducer(ticketReducer, emptyTicket);

  return (
    <>
      <ConfidenceField ticket={ticket} dispatch={dispatch} />
      <p>Confidence: {ticket.confidence}%</p>
    </>
  );
}
`,
  },
];

const ch18 = [
  {
    id: "error-boundary",
    heading: "Contain a render error",
    instruction: "Worked example",
    intro:
      "The middle forecast is missing its question, so its card throws during render. The boundary catches it: one fallback card, and the rest of the list keeps working.",
    code: `import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function ForecastCard(props) {
  const question = props.question.trim();
  return (
    <article className="forecast-card">
      <h2>{question}</h2>
      <p className="forecast-odds">
        <span className="yes">{props.yes}% Yes</span>
        <span className="no">{props.no}% No</span>
      </p>
    </article>
  );
}

const forecasts = [
  { id: "mars-orbit", question: "Mars orbit before 2035?", yes: 42, no: 58 },
  { id: "battery", question: undefined, yes: 28, no: 72 },
  { id: "heat-record", question: "New summer heat record?", yes: 61, no: 39 },
];

export default function App() {
  return (
    <main>
      <h1>Forecast</h1>
      <ul className="forecast-list">
        {forecasts.map((forecast) => (
          <li key={forecast.id}>
            <ErrorBoundary
              fallback={<p className="forecast-card">This forecast could not be shown.</p>}
            >
              <ForecastCard
                question={forecast.question}
                yes={forecast.yes}
                no={forecast.no}
              />
            </ErrorBoundary>
          </li>
        ))}
      </ul>
    </main>
  );
}
`,
  },
];

const ch20 = [
  {
    id: "routing",
    heading: "Add routing",
    instruction: "Worked example",
    intro:
      "Routes associate each screen with a URL, and Link navigates without reloading the app. Click between Home and Watchlist — the address bar follows.",
    dependencies: { "react-router-dom": "^6.28.0" },
    code: `import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Forecast</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
      </nav>
    </header>
  );
}

function HomePage() {
  return <p>Trending forecasts appear here.</p>;
}

function WatchlistPage() {
  return <p>Your watched forecasts appear here.</p>;
}

function NotFoundPage() {
  return <p>That page does not exist.</p>;
}

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
`,
  },
  {
    id: "your-turn",
    heading: "Your turn: route the watchlist",
    instruction: "Exercise",
    dependencies: { "react-router-dom": "^6.28.0" },
    intro:
      "Add the watchlist address to the app: a route that renders WatchlistPage at /watchlist, and a link to it in the header. The answer is one panel down.",
    code: `import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function HomePage() {
  return <p>Trending forecasts appear here.</p>;
}

function WatchlistPage() {
  return <p>Your watched forecasts appear here.</p>;
}

function NotFoundPage() {
  return <p>That page does not exist.</p>;
}

function Header() {
  return (
    <header>
      <h1>Forecast</h1>
      <nav>
        <Link to="/">Home</Link>
        {/* 2. link to the watchlist */}
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* 1. render WatchlistPage at /watchlist */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
`,
  },
  {
    id: "answer",
    heading: "One possible answer",
    instruction: "Answer",
    dependencies: { "react-router-dom": "^6.28.0" },
    intro:
      "The new route renders WatchlistPage when the path matches, and the header link changes the URL without a reload.",
    code: `import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function HomePage() {
  return <p>Trending forecasts appear here.</p>;
}

function WatchlistPage() {
  return <p>Your watched forecasts appear here.</p>;
}

function NotFoundPage() {
  return <p>That page does not exist.</p>;
}

function Header() {
  return (
    <header>
      <h1>Forecast</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
`,
  },
];

const ch17 = [
  {
    id: "memo",
    heading: "memo and useMemo skip repeated work",
    instruction: "Worked example",
    intro:
      "The clock ticks every second, so App re-renders every second. Open the console: the memoized cards log only once, because their question prop never changes. useMemo reuses the filtered list while the array is the same.",
    code: `import { memo, useEffect, useMemo, useState } from "react";

function useCountdown(start) {
  const [secondsLeft, setSecondsLeft] = useState(start);
  const finished = secondsLeft === 0;

  useEffect(() => {
    if (finished) return;
    const id = setInterval(() => {
      setSecondsLeft((current) => Math.max(0, current - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [finished]);

  return secondsLeft;
}

const all = [
  { id: "mars-orbit", question: "Mars orbit before 2035?", status: "open" },
  { id: "battery", question: "New battery tech this year?", status: "open" },
  { id: "heat-record", question: "New summer heat record?", status: "closed" },
];

const ForecastCard = memo(function ForecastCard(props) {
  console.log("card rendered:", props.question);
  return <li>{props.question}</li>;
});

function ForecastList({ forecasts }) {
  const open = useMemo(() => {
    return forecasts.filter((forecast) => forecast.status === "open");
  }, [forecasts]);

  return (
    <ul className="forecast-list">
      {open.map((forecast) => (
        <ForecastCard key={forecast.id} question={forecast.question} />
      ))}
    </ul>
  );
}

export default function App() {
  const secondsLeft = useCountdown(600);

  return (
    <main>
      <p>Closes in {secondsLeft}s</p>
      <ForecastList forecasts={all} />
    </main>
  );
}
`,
  },
];

const ch21 = [
  {
    id: "typed-forecast",
    heading: "Type a forecast and its props",
    instruction: "Worked example",
    intro:
      "The Forecast type describes the data's shape once; ForecastCardProps names what the component accepts. Try misspelling 'open' — the editor catches it.",
    template: "react-ts",
    file: "/App.tsx",
    code: `type Forecast = {
  id: string;
  question: string;
  yes: number;
  no: number;
  status: "open" | "closed" | "resolved";
};

type ForecastCardProps = {
  question: string;
  yes: number;
  no: number;
};

function ForecastCard(props: ForecastCardProps) {
  return (
    <article className="forecast-card">
      <h2>{props.question}</h2>
      <p className="forecast-odds">
        <span className="yes">{props.yes}% Yes</span>
        <span className="no">{props.no}% No</span>
      </p>
    </article>
  );
}

const forecasts: Forecast[] = [
  { id: "mars-orbit", question: "Mars orbit before 2035?", yes: 42, no: 58, status: "open" },
  { id: "battery", question: "New battery tech this year?", yes: 28, no: 72, status: "open" },
];

export default function App() {
  return (
    <main>
      <h1>Forecast</h1>
      {forecasts.map((forecast) => (
        <ForecastCard
          key={forecast.id}
          question={forecast.question}
          yes={forecast.yes}
          no={forecast.no}
        />
      ))}
    </main>
  );
}
`,
  },
  {
    id: "your-turn",
    heading: "Your turn: type the watch button",
    instruction: "Exercise",
    template: "react-ts",
    file: "/App.tsx",
    intro:
      "Describe WatchButtonProps — a forecastId string and an isWatching boolean — and give props that type. The two commented-out tags should then fail the check in an editor. The answer is one panel down.",
    code: `/* 1. describe WatchButtonProps */

function WatchButton(
  props /* 2. use the type */
) {
  return (
    <button>
      {props.isWatching ? "Watching" : "Watch"}
    </button>
  );
}

export default function App() {
  return (
    <main>
      <WatchButton forecastId="mars-orbit" isWatching={false} />
      {/* these two should then fail the check:
          <WatchButton forecastId={7} />
          <WatchButton isWatching={true} /> */}
    </main>
  );
}
`,
  },
  {
    id: "answer",
    heading: "One possible answer",
    instruction: "Answer",
    template: "react-ts",
    file: "/App.tsx",
    intro:
      "WatchButtonProps requires a forecastId string and an isWatching boolean. Passing a number for forecastId, or omitting either prop, would be a type error.",
    code: `type WatchButtonProps = {
  forecastId: string;
  isWatching: boolean;
};

function WatchButton(props: WatchButtonProps) {
  return (
    <button>
      {props.isWatching ? "Watching" : "Watch"}
    </button>
  );
}

export default function App() {
  return (
    <main>
      <WatchButton forecastId="mars-orbit" isWatching={false} />
      <WatchButton forecastId="battery" isWatching={true} />
    </main>
  );
}
`,
  },
];

const dataNote =
  "These examples fetch forecast data from the book's mock server, which the in-browser sandbox can't provide. To run them, set up the local project and mock server following the “Running the code” section at the front of the book — the server first appears in Chapter 11, Data loading.";

export const chapters = [
  { num: 1, slug: "components", topic: "Components", title: "Create your first component", part: 0, examples: ch1 },
  { num: 2, slug: "props", topic: "Props", title: "Pass data with props", part: 0, examples: ch2 },
  { num: 3, slug: "jsx", topic: "JSX", title: "Use JavaScript inside markup", part: 0, examples: ch3 },
  { num: 4, slug: "composition", topic: "Composition", title: "Compose components", part: 0, examples: ch4 },
  { num: 5, slug: "lists-and-keys", topic: "Lists and keys", title: "Render lists from arrays", part: 0, examples: ch5 },
  { num: 6, slug: "state", topic: "State", title: "Store values between renders", part: 0, examples: ch6 },
  { num: 7, slug: "events", topic: "Events", title: "Handle click events", part: 0, examples: ch7 },
  { num: 8, slug: "forms", topic: "Forms", title: "Control form fields with state", part: 0, examples: ch8 },
  { num: 9, slug: "conditional-rendering", topic: "Conditional rendering", title: "Render different markup conditionally", part: 0, examples: ch9 },
  { num: 10, slug: "effects", topic: "Effects", title: "Synchronize with a timer", part: 0, examples: ch10 },
  { num: 11, slug: "data-loading", topic: "Data loading", title: "Load the forecast from the server", part: 1, examples: [], envNote: dataNote },
  { num: 12, slug: "pending-ui", topic: "Pending UI", title: "Show loading and error states", part: 1, examples: [], envNote: dataNote },
  { num: 13, slug: "optimistic-ui", topic: "Optimistic UI", title: "Update before a request finishes", part: 1, examples: [], envNote: dataNote },
  { num: 14, slug: "custom-hooks", topic: "Custom hooks", title: "Reuse stateful logic", part: 1, examples: ch14 },
  { num: 15, slug: "sharing-state", topic: "Sharing state", title: "Share state between components", part: 1, examples: ch15 },
  { num: 16, slug: "reducers", topic: "Reducers", title: "Manage related state with a reducer", part: 1, examples: ch16 },
  { num: 17, slug: "performance", topic: "Performance", title: "Measure before you optimize", part: 2, examples: ch17 },
  { num: 18, slug: "error-boundaries", topic: "Error boundaries", title: "Handle errors during rendering", part: 2, examples: ch18 },
  { num: 19, slug: "testing", topic: "Testing", title: "Test component behavior", part: 2, examples: [], envNote: "These examples are test files that run with Vitest, which the in-browser sandbox can't provide. To run them, set up the local project following the “Running the code” section at the front of the book — Chapter 19, Testing, adds the test tools." },
  { num: 20, slug: "routing", topic: "Routing", title: "Add routing", part: 2, examples: ch20 },
  { num: 21, slug: "typescript", topic: "TypeScript", title: "Check data with TypeScript", part: 2, examples: ch21 },
  { num: 22, slug: "production", topic: "Final checks", title: "Run final checks", part: 2, examples: [], envNote: "This chapter runs the production build and final checks, which the in-browser sandbox can't provide. To run them, set up the local project following the “Running the code” section at the front of the book — Chapter 22, Final checks, walks through each step." },
];

export function getChapter(num) {
  return chapters.find((c) => String(c.num) === String(num));
}
