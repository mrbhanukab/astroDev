import "./App.css";
import bg from "../src/assets/bg.jpeg";
import Weather from "./components/weather";

function App() {
  return (
    <section className="container">
      <div className="content">
        <Weather />
      </div>
      {/* <img src={bg} alt="Background Image" className="img" /> */}
    </section>
  );
}

export default App;
