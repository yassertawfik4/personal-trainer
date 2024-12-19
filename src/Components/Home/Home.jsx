import "./Home.css";
import persone from "/src/assets/handsome-strong-man-exercising-gym 1.svg";
import bgImage from "/src/assets/Group 36.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out", // Easing
    });
  }, []);

  return (
    <section
      className="home relative pb-24 lg:pb-0"
      aria-labelledby="home-heading"
    >
      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex justify-between">
          {/* Left Section */}
          <div className="relative z-40 w-full">
            <h1
              id="home-heading"
              data-aos="fade-right"
              data-aos-duration="500"
              className="uppercase font-bold text-[#FFFFFF] text-5xl sm:text-6xl md:text-7xl mt-20 lg:mt-[220px]"
            >
              Transform <br /> Challenges <br /> into Triumphs!
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="700"
              className="text-[#909090] font-semibold py-7 leading-relaxed text-xl md:text-2xl"
            >
              As a passionate personal trainer, I believe in empowering
              individuals to achieve their fitness goals through personalized
              coaching and support.
            </p>
            <button
              data-aos="fade-right"
              data-aos-duration="700"
              className="mt-2 text-2xl border-2 border-[#FF2332] hover:bg-transparent transition-colors h-[74px] text-white rounded-[16px] font-bold w-[214px] duration-300 transform bg-[#FF2332] lg:mt-0 hover:text-[#FF2332]"
              aria-label="Get Started with Personal Training"
            >
              Get Started
            </button>
          </div>

          {/* Right Section */}
          <div className="w-full hidden lg:block h-full lg:mt-20 xl:mt-0">
            <img
              className="relative z-10 h-full"
              src={persone}
              alt="A strong man exercising at the gym"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Background Image */}
      <img
        className="absolute lg:block hidden w-[1105.48px] top-0 z-0 opacity-50 left-0 lg:left-[396px] h-[932.08px] lg:h-[958.08px]"
        src={bgImage}
        alt="Abstract gym-related background"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="w-full h-[321px] bg-gradient-to-t from-[#1A1A1A] to-transparent absolute bottom-0 z-30"></div>

      {/* Large Text */}
      <h3
        className="textcolor text-7xl xs:text-8xl sm:text-[120px] md:text-[150px] lg:text-[200px] xl:text-[220px] font-extrabold absolute bottom-0 md:bottom-[-20px] lg:bottom-[-30px] z-0"
        aria-hidden="true"
      >
        JOHN DOE
      </h3>
    </section>
  );
}

export default Home;
