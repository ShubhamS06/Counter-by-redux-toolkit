import './App.css';
import Home from './Pages/Home';


function App(props) {
  return (
    <div className="App">
      <h1>Shubham Sahu</h1>

      <Home  {...props}/>
    </div>
  );
}

export default App;
