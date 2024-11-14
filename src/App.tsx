import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts";
import { Attribute } from "./components/Attribute";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Creator</h1>
      </header>
      <section className="App-section">
        <h2>Attributes</h2>
        <section className="Attribute-list">
          {ATTRIBUTE_LIST.map((attribute) => (
            <Attribute name={attribute} />
          ))}
        </section>
      </section>
    </div>
  );
}

export default App;
