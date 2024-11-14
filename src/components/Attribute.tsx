import "./Attribute.css";

type AttributeProps = {
  name: string;
  value: number;
  onChange: (name: string, newValue: number) => void;
};

export function Attribute({ name, value, onChange }: AttributeProps) {
  return (
    <div className="Attribute">
      <h3 className="Attribute-name">{name}</h3>
      <button onClick={() => onChange(name, value - 1)}>-</button>
      <span className="Attribute-value">{value}</span>
      <button onClick={() => onChange(name, value + 1)}>+</button>
    </div>
  );
}
