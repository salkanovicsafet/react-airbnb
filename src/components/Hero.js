import photoGrid from "../assets/images/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero--photoGrid">
        <img src={photoGrid} alt="Grid" className="hero--photoGrid--img" />
      </div>
      <div className="hero--text">
        <h1>Online Experiences</h1>
        <h2>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </h2>
      </div>
    </div>
  );
}
