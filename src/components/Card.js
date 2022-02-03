import Star from "../assets/images/Star.png";

export default function Card(props) {
  let statusText;
  if (props.location === "Online") statusText = "ONLINE";
  if (props.openSpots === 0) statusText = "SOLD OUT";
  return (
    <div className="card">
      <div className="image-wrapper">
        <img
          src={require(`../assets/images/${props.coverImg}`)}
          alt={props.coverImg}
          className="card--img"
        />
        {statusText && <div className="card--img--status">{statusText}</div>}
      </div>
      <div className="card--details">
        <div className="card--details--reviews">
          <img
            src={Star}
            alt="Red star icon"
            className="card--details--reviews--star"
          />
          <div className="card--details--reviews--rating">
            {props.stats.rating}
          </div>
          <div className="card--details--reviews--count">
            ({props.stats.reviewCount})
          </div>
          <div className="card--details--reviews--location">
            • {props.location}
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
