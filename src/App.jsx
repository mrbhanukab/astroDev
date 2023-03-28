import "./App.css";
import bg from "../src/assets/bg.jpeg";
import Section from "./components/Section";

function App() {
  return (
    <section className="container">
      <div className="content">
        <Section />
      </div>
      <img src={bg} alt="Background Image" className="img" />
    </section>
  );
}

export default App;
