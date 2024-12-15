import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Paner from "./Components/Paner/Paner";
import Qualifications from "./Components/Qualifications/Qualifications";
import Services from "./Components/Services/Services";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Paner />
      <About />
      <Qualifications />
      <Services/>
    </>
  );
}

export default App;
