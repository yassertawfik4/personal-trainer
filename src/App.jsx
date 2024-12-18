import About from "./Components/About/About";
import FQ from "./Components/F&Q/FQ";
import Footer from "./Components/Footer/Footer";
import GetStarted from "./Components/GetStrated/GetStarted";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Paner from "./Components/Paner/Paner";
import Qualifications from "./Components/Qualifications/Qualifications";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Paner />
      <About />
      <Qualifications />
      <Services />
      <Testimonials />
      <FQ />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
