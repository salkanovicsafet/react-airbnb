import Star from "../assets/images/Star.png";

export default function Card(props) {
  let statusText;
  if (props.item.location === "Online") statusText = "ONLINE";
  if (props.item.openSpots === 0) statusText = "SOLD OUT";
  return (
    <div className="card">
      <div className="image-wrapper">
        <img
          src={require(`../assets/images/${props.item.coverImg}`)}
          alt={props.item.coverImg}
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
            {props.item.stats.rating}
          </div>
          <div className="card--details--reviews--count">
            ({props.item.stats.reviewCount})
          </div>
          <div className="card--details--reviews--location">
            • {props.item.location}
          </div>
        </div>
        <div className="card--details--lesson-name">{props.item.title}</div>
        <div className="card--details--price">
          <strong>From ${props.item.price}</strong> / person
        </div>
      </div>
    </div>
  );
}
