import logo from "../assets/images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="Airbnb logo" className="nav--logo" />
    </nav>
  );
}
