import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="relative ">
      <img className="absolute z-10" src="/assests/circleone.png" />
      <img className="absolute scale-125" src="/assests/poly2.png" />
      <img className="absolute right-0" src="/assests/poly1.png" />
      <Header />
      <Hero />
      <About />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
