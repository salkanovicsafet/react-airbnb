import Katie from "../assets/images/Katie.png";
import Star from "../assets/images/Star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={Katie} alt="Katie Zaferes" className="card--img" />
      <div className="card--details">
        <div className="card--details--reviews">
          <img
            src={Star}
            alt="Red star icon"
            className="card--details--reviews--star"
          />
          <div className="card--details--reviews--rating">5.0</div>
          <div className="card--details--reviews--count">(6)</div>
          <div className="card--details--reviews--location">•USA</div>
        </div>
        <div className="card--details--lesson-name">
          Life lessons with Katie Zaferes
        </div>
        <div className="card--details--price">
          <strong>From $136</strong> / person
        </div>
      </div>
    </div>
  );
}
