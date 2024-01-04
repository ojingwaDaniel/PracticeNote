import logo from "../logo.svg";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="react-intro">
        <img src={logo} alt="img" className="App-logo" />
        <h1 className="intro">ReactFacts</h1>
        </div>
        

        <ul>
          <li>React Course</li>
          <li>Project 1</li> 
        </ul>
      </nav>
    </header>
  );
}
