import logo from "../logo.svg";

export default function Header() {
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
