import { SKILL_LIST } from "../consts";

import type { Attributes, Skills } from "../types";

import "./SkillsList.css";

type SkillsListProps = {
  skills: Skills;
  attributeModifiers: Attributes;
  onSkillChange: (name: string, newValue: number) => void;
};

export function SkillsList({
  skills,
  attributeModifiers,
  onSkillChange,
}: SkillsListProps) {
  return (
    <div className="SkillsList">
      {SKILL_LIST.map((skill) => (
        <div className="Skill">
          {skill.name}: {skills[skill.name]}{" "}
          <button
            onClick={() =>
              onSkillChange(skill.name, skills[skill.name] - 1)
            }
          >
            -
          </button>{" "}
          <button
            onClick={() =>
              onSkillChange(skill.name, skills[skill.name] + 1)
            }
          >
            +
          </button>{" "}
          (Modifier: {skill.attributeModifier}:{" "}
          {attributeModifiers[skill.attributeModifier]}) Total:{" "}
          {skills[skill.name] + attributeModifiers[skill.attributeModifier]}
        </div>
      ))}
    </div>
  );
}
