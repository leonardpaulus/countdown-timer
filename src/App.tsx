import { useState } from "react";
import CountdownTimer from "./components/CountdownTimer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CountdownTimer year={1995} month={1} day={12} />
    </div>
  );
}

export default App;
