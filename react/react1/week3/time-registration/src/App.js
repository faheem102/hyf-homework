import logo from "./logo.svg";
import "./App.css";
import { SubmitShifts } from "./SubmitShifts";

function App() {
  return (
    <div className="App">
      <h2>Shifts Overview</h2>
      <SubmitShifts fetchUrl="https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw"></SubmitShifts>
    </div>
  );
}

export default App;
