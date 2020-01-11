import React from "react";
import TopNavbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Sections/About";
import Download from "./Components/Download";
import OurFeatures from "./Sections/OurFeatures";
import Testimonials from "./Sections/Testimonials";
import Plans from "./Sections/Plans";
import Counter from "./Sections/Counter";
import ChooseUs from "./Sections/ChooseUs";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

function App() {
  return (
    <>
      <TopNavbar />
      <Banner />
      <About />
      <Download />
      <OurFeatures />
      <Testimonials />
      <Plans />
      <Counter />
      <ChooseUs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
