import "./Attribute.css";

type AttributeProps = {
  name: string;
  value: number;
  modifier: number;
  onChange: (name: string, newValue: number) => void;
};

export function Attribute({ name, value, modifier, onChange }: AttributeProps) {
  return (
    <div className="Attribute">
      <h3 className="Attribute-name">{name}</h3>
      <button onClick={() => onChange(name, value - 1)}>-</button>
      <span className="Attribute-value">{value}</span>
      <button onClick={() => onChange(name, value + 1)}>+</button>
      <p>
        <i>Modifier: {modifier}</i>
      </p>
    </div>
  );
}
