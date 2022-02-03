import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import experiences from "./data/data.js";

const cards = experiences.map((x) => {
  return (
    <Card
      key={x.id}
      img={x.coverImg}
      rating={x.stats.rating}
      reviewCount={x.stats.reviewCount}
      location={x.location}
      title={x.title}
      price={x.price}
      openSpots={x.openSpots}
    />
  );
});

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container cards">{cards}</div>
    </>
  );
}
