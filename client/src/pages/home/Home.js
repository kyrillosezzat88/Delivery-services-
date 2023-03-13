import { Featured, Hero, Navbar } from "../../components";
import "./Home.scss";
const Home = () => {
  return (
    <section className="Home">
      <Navbar />
      <Hero />
      <Featured />
    </section>
  );
};

export default Home;
