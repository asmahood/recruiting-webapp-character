import { useState } from "react";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts";
import { Attribute } from "./components/Attribute";
import { ClassCard } from "./components/Class";
import meetsClassRequirements from "./utils/meetsClassRequirements";

import type { Attributes } from "./types";

import "./App.css";

function App() {
  const [attributes, setAttributes] = useState<Attributes>({
    Charisma: 10,
    Constitution: 10,
    Dexterity: 10,
    Intelligence: 10,
    Strength: 10,
    Wisdom: 10
  });

  const handleAttributeChange = (name: string, newValue: number) => {
    // Prevent an attribute's value from being negative
    if (newValue < 0) {
      return;
    }

    setAttributes({
      ...attributes,
      [name]: newValue
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Creator</h1>
      </header>
      <section className="App-section">
        <h2>Attributes</h2>
        <section className="Attribute-list">
          {Object.entries(attributes).map(([name, value]) => (
            <Attribute name={name} value={value} onChange={handleAttributeChange}/>
          ))}
        </section>
        <h2>Classes</h2>
        <section className="Class-list">
          {Object.entries(CLASS_LIST).map(([name, classAttrs]) => (
            <ClassCard name={name} meetsRequirements={meetsClassRequirements(attributes, classAttrs)} />
          ))}
        </section>
      </section>
    </div>
  );
}

export default App;
