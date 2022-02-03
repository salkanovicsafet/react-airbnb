import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import experiences from "./data/data.js";

const cards = experiences.map((x) => {
  return <Card key={x.id} item={x} />;
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
