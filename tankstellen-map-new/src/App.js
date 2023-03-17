import logo from './logo.svg';
import './App.css';
import Map from './components/Map';

const positions = [{longitude:"47.41366", latitude:"9.74237"},{longitude:"47.41366", latitude:"9.74237"},{longitude:"47.41366", latitude:"9.74237"},];

function App() {
  return (
    <div className="App">
      <h1>Gas Station Map</h1>
      <div style={{height:"400px",height:"400px",backgroundColor:'green'}}>
        <Map props={positions}/>
      </div>
    </div>
  );
}

export default App;
