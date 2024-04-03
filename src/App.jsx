import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import CoreConcept from "./Components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./Components/Examples/TabButton.jsx";

import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";

function App() {
  const [tabContent, setTabContent] = useState(null);

  function handleClick(selected) {
    setTabContent(() => selected);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            {CORE_CONCEPTS.map((data) => (
              <CoreConcept key={data.title} {...data} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton
              isSelected={tabContent === "components"}
              handleClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              handleClick={() => handleClick("jsx")}
            >
              {" "}
              JSX{" "}
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              handleClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              handleClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            {tabContent != null ? (
              <div>
                <h3>{EXAMPLES[tabContent].title}</h3>
                <p>{EXAMPLES[tabContent].description}</p>
                <pre>
                  <code>{EXAMPLES[tabContent].code}</code>
                </pre>
              </div>
            ) : (
              <p>Please select a topic</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
