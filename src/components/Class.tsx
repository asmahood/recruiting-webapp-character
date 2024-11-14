import { useState } from "react";
import { Attributes } from "../types";

import "./Class.css";

type ClassCardProps = {
  name: string;
  attributes: Attributes;
  meetsRequirements: boolean;
};

export function ClassCard({
  name,
  attributes,
  meetsRequirements,
}: ClassCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`ClassCard ${meetsRequirements ? "valid" : ""}`} onClick={() => setExpanded(!expanded)}>
      <h3>{name}</h3>
      {expanded && (
        <section>
          <p>Minimum Requirements</p>
          {Object.entries(attributes).map(([name, value]) => (
            <p>
              {name}: {value}
            </p>
          ))}
        </section>
      )}

    </div>
  );
}
