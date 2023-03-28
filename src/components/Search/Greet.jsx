import { useEffect } from "react";
import "./Greet.css";

function Greet() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Morning!";
  } else if (currentHour < 18) {
    greeting = "Afternoon!";
  } else {
    greeting = "Evening!";
  }

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = "Good " + greeting;
  }, [greeting]);

  return (
    <>
      <h3 className="good">Good </h3>
      <h1 className="greet">{greeting}</h1>
    </>
  );
}

export default Greet;
