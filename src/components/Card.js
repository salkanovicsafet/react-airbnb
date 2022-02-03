import Star from "../assets/images/Star.png";

export default function Card(props) {
  return (
    <div className="card">
      <div className="image-wrapper">
        <img
          src={require(`../assets/images/${props.img}`)}
          alt="Katie Zaferes"
          className="card--img"
        />
        <div class="card--img--status">SOLD OUT</div>
      </div>
      <div className="card--details">
        <div className="card--details--reviews">
          <img
            src={Star}
            alt="Red star icon"
            className="card--details--reviews--star"
          />
          <div className="card--details--reviews--rating">{props.rating}</div>
          <div className="card--details--reviews--count">
            ({props.reviewCount})
          </div>
          <div className="card--details--reviews--location">
            • {props.country}
          </div>
        </div>
        <div className="card--details--lesson-name">{props.title}</div>
        <div className="card--details--price">
          <strong>From ${props.price}</strong> / person
        </div>
      </div>
    </div>
  );
}
