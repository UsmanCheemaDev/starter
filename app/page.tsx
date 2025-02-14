import Image from "next/image";
import Main from "./Components/Main";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Slider from "./Components/Slider";
import Cards from "./Components/Cards";
import Portfolio from "./Components/Portfolio";
import Review from "./Components/Review";
import Counter from "./Components/Counter";
import Toggler from "./Components/Toggler";
import Body from "./Components/Body";

export default function Home() {
  return (
    <>
      <body>
        <Main />

        <About />
        <Hero />
        <Slider />
        <Cards />
        <Portfolio />
        <Review />
        <Contact />
        <Counter />
        <Toggler />
      </body>
    </>
  );
}
