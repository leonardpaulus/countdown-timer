import CountdownTimer from "./components/CountdownTimer";

function App() {
  return (
    <div className="App">
      <CountdownTimer
        year={2023}
        month={2}
        day={14}
        hour={8}
        minute={30}
        timeZone={0}
      />
    </div>
  );
}

export default App;
