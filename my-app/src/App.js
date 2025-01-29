import React from "react";
import { Calendar } from "bpk-component-calendar"; // Import the Calendar component
import "./App.scss"; // Import the styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Schedule</h1> {/* Header text */}
      </header>
      <div className="Calendar-container">
        <Calendar /> {/* Display the calendar */}
      </div>
      <button className="Continue-button">Continue</button>{" "}
      {/* Button below the calendar */}
    </div>
  );
}

export default App;
