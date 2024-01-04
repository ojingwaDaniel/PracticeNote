import logo from "../logo.svg";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="img" className="App-logo" />
        <ul>
          
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li> 
        </ul>
      </nav>
    </header>
  );
}
