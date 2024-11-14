import { useState } from "react";
import {
  CLASS_LIST,
  INITIAL_ATTRIBUTES,
  INITIAL_SKILLS,
} from "./consts";
import { Attribute } from "./components/Attribute";
import { ClassCard } from "./components/Class";
import { SkillsList } from "./components/SkillsList";
import meetsClassRequirements from "./utils/meetsClassRequirements";
import calculateAttributeModifier from "./utils/calculateAttributeModifier";

import type { Skills, Attributes } from "./types";

import "./App.css";

function App() {
  const [attributes, setAttributes] = useState<Attributes>(INITIAL_ATTRIBUTES);
  const [skills, setSkills] = useState<Skills>(INITIAL_SKILLS);
  const [skillPoints, setSkillPoints] = useState(0);

  const attributeModifiers: Attributes = {
    Charisma: calculateAttributeModifier(attributes.Charisma),
    Constitution: calculateAttributeModifier(attributes.Constitution),
    Dexterity: calculateAttributeModifier(attributes.Dexterity),
    Intelligence: calculateAttributeModifier(attributes.Intelligence),
    Strength: calculateAttributeModifier(attributes.Strength),
    Wisdom: calculateAttributeModifier(attributes.Wisdom),
  };

  const maxSkillPoints = 10 + 4 * attributeModifiers.Intelligence;

  const handleAttributeChange = (name: string, newValue: number) => {
    // Prevent an attribute's value from being negative
    if (newValue < 0) {
      return;
    }

    setAttributes({
      ...attributes,
      [name]: newValue,
    });
  };

  const handleSkillChange = (name: string, newValue: number) => {
    // Prevent skills from going into the negatives
    if (newValue < 0) {
      return;
    }

    // Prevent additional skill points from being alotted if all are used
    if (skillPoints === maxSkillPoints) {
      return;
    }

    // Update the number of skill points based on the number of points added/removed.
    // This will increase by 1 if removing a skill point and decrease by 1 if adding a skill point.
    setSkillPoints(skillPoints + (newValue - skills[name]));
    setSkills({
      ...skills,
      [name]: newValue,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Creator</h1>
      </header>
      <section className="App-section">
        <h2>Attributes</h2>
        <section className="Attribute-list">
          {Object.entries(attributes).map(([name, value]) => (
            <Attribute
              name={name}
              value={value}
              modifier={attributeModifiers[name]}
              onChange={handleAttributeChange}
            />
          ))}
        </section>
        <h2>Classes</h2>
        <section className="Class-list">
          {Object.entries(CLASS_LIST).map(([name, classAttrs]) => (
            <ClassCard
              name={name}
              attributes={classAttrs}
              meetsRequirements={meetsClassRequirements(attributes, classAttrs)}
            />
          ))}
        </section>
        <h2>Skills</h2>
        <i>Skill Points Available: {maxSkillPoints - skillPoints}</i>
        <SkillsList
          skills={skills}
          attributeModifiers={attributeModifiers}
          onSkillChange={handleSkillChange}
        />
      </section>
    </div>
  );
}

export default App;
