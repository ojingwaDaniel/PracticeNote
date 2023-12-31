import logo from "./logo.svg";
import "./App.css";


function Header(){
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="img" className="App-logo" />
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Pricing</li>
        </ul>
      </nav>
    </header>
  );
}
function MainContent(){
  return (
    <div  className = 'main-content'>
      <h1>Reason I'm Excited To Learn React!</h1>
      <ul>
        <li>Is Compatible</li>
        <li> Is Been maintained By Faceboo</li>
        <li> Is declarative not Imperative</li>
        <li>Is easy to install and use immediately</li>
      </ul>
    </div>
  );
}
function Footer(){
  return (
    <footer>
      <small> &copy; 2023 Ojingwa Development All right Reserved</small>
    </footer>
  );
}
function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
export default App