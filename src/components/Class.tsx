import "./Class.css";

type ClassCardProps = {
  name: string;
  meetsRequirements
}

export function ClassCard({ name, meetsRequirements }: ClassCardProps) {
  return (
    <div className={`ClassCard ${meetsRequirements ? "valid" : ""}`}>
      <h3>{name}</h3>
    </div>
  );
}
