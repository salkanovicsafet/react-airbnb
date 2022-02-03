import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import experiences from "./data/data.js";

const experiencesMapped = experiences.map((x) => {
  return (
    <Card
      img={x.coverImg}
      rating={x.stats.rating}
      reviewCount={x.stats.reviewCount}
      country={x.location}
      title={x.title}
      price={x.price}
    />
  );
});

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">{experiencesMapped}</div>
    </>
  );
}
