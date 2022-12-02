import CountdownTimer from "./components/CountdownTimer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CountdownTimer year={2023} month={2} day={14} />
    </div>
  );
}

export default App;
