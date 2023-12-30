import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Fun Facts About React</h1>
      <ul>
        <li>
          Was first released in 2013
        </li>
        <li>
          Was originally created by Jordan Walke
        </li>
        <li>
        Has well over 100k stars on github
        </li>
        <li>
          is maintained by Facebook
        </li>
        <li>
          Powers thousands of enterprise apps , including mobile apps
        </li>
      </ul>

    
    </div>
  );
}

export default App;
