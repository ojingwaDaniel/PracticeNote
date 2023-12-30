import logo from "./logo.svg";
import "./App.css";

function App(){
  return (
    <div className="App">
      <header>
        <img src={logo} alt="img"  className = 'App-logo'/>
      </header>
      <h1>Fun Fact About React</h1>
      <ul>
        <li>Is Compatible</li>
        <li> Is Been maintained By Faceboo</li>
        <li> Is declarative not Imperative</li>
        <li>Is easy to install and use immediately</li>
      </ul>
      <footer>
        &copy; CopyRight 2023
      </footer>
      
    </div>
  );
}
export default App