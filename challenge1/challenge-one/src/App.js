import logo from "./logo.svg";
import "./App.css";

function App(){
  return (
    <div className="App">
      <header>
        <img src={logo} alt="img" className="App-logo" />
      </header>
      <h1>Reason im excited to learn React!</h1>
      <ul>
        <li>Is Compatible</li>
        <li> Is Been maintained By Faceboo</li>
        <li> Is declarative not Imperative</li>
        <li>Is easy to install and use immediately</li>
      </ul>
      <footer>
        <small> &copy; 2023 Ojingwa Development All right Reserved</small>
      </footer>
    </div>
  );
}
export default App