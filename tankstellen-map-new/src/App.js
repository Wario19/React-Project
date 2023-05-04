import logo from './logo.svg';
import "./App.css";
import GasContainer from "./components/GasContainer";

const positions = [{ longitude: "47.41366", latitude: "9.74237" }, { longitude: "47.41366", latitude: "9.74237" }, { longitude: "47.41366", latitude: "9.74237" },];

function App() {
  return (
    <div className="App">
      <h1>Gas Station Map

      </h1>

      <div className="App">
      <GasContainer></GasContainer>
    </div>
    </div>
  );
}

export default App;
