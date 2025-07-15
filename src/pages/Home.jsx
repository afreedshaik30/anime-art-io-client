import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import About from "./About";

export default function Home() {
  return (
    <div>
      <Hero />
      <Carousel />
      <About />
      <Footer />
    </div>
  );
}
