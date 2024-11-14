import { useState } from "react";

import "./Attribute.css";

type AttributeProps = {
  name: string;
};

export function Attribute({ name }: AttributeProps) {
  const [value, setValue] = useState(10);

  const handleClick = (newValue: number) => {
    // Prevent attribute's value from being less than 0
    if (newValue < 0) {
      return;
    }

    setValue(newValue);
  }

  return (
    <div className="Attribute">
      <h3 className="Attribute-name">{name}</h3>
      <button onClick={() => handleClick(value - 1)}>-</button>
      <span className="Attribute-value">{value}</span>
      <button onClick={() => handleClick(value + 1)}>+</button>
    </div>
  );
}
