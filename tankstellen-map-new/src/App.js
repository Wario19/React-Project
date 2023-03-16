import logo from './logo.svg';
import './App.css';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <h1>Tankstellen Karte</h1>
      <div style={{height:"400px",height:"400px",backgroundColor:'green'}}>
        <Map/>
      </div>
    </div>
  );
}

export default App;
