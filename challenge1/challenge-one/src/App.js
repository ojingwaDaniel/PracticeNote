import logo from "./logo.svg";
import "./App.css";

function App(){
  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}
function Header(){
  return (
    <header>
      <nav>
        <img src={logo} alt="img" className="App-logo" />
      </nav>
      <h3>REACT COURSE </h3>
    </header>
  );
}
function MainContent(){
  return (
    <>
      <h1>Reason im excited to learn React!</h1>
      <ul>
        <li>Is Compatible</li>
        <li> Is Been maintained By Faceboo</li>
        <li> Is declarative not Imperative</li>
        <li>Is easy to install and use immediately</li>
      </ul>
    </>
  );
}
function Footer(){
  return (
    <footer>
      <small> &copy; 2023 Ojingwa Development All right Reserved</small>
    </footer>
  );
}
export default App