import "./index.css";
import Salary from "./components/Salary";

function App() {
  return (
    <div className="App">
      <div className="salary">
        <h1>£25000</h1>
        <Salary number={1700} />
      </div>

      <div className="salary">
        <h1>£20000</h1>
        <Salary number={1468} />
      </div>
    </div>
  );
}

export default App;
