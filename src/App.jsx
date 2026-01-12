import "./App.css";
import Header from "./components/header";
import Contact from "./components/contact";
import Hero from "./components/Hero";
import Features from "./components/feature";
import Footer from "./components/footer";
import Testimonios from "./components/testimonio";
import Cta from "./components/cta";

function App() {
  return (
    <>
      {/* <!-- Header --> */}
      <Header />
      {/* <!-- Hero Section --> */}

      <Hero />
      {/* <!-- Section de feature --> */}

      <Features />
      {/* <!-- Section de Testimonies --> */}

      <Testimonios />

      {/* <!-- Section CTA --> */}

      <Cta />

      {/* <!-- Section de Contact --> */}

      <Contact />
      {/* <!-- Footer --> */}

      <Footer />
    </>
  );
}

export default App;
