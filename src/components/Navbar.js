import logo from "../assets/images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <img src={logo} alt="Airbnb logo" className="nav--logo" />
      </div>
    </nav>
  );
}
