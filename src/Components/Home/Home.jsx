import "./Home.css";
import persone from "/src/assets/handsome-strong-man-exercising-gym 1.svg";
import bgImage from "/src/assets/Group 36.png";
function Home() {
  return (
    <section className="home relative pb-24 lg:pb-0">
      <div className="container mx-auto  px-6 lg:px-0">
        <div className="flex justify-between ">
          <div className="relative z-40  w-full ">
            <h1 className="uppercase font-bold text-[#FFFFFF] text-5xl sm:text-6xl md:text-7xl mt-20 lg:mt-[220px]">
              Transform <br /> Challenges <br /> into Triumphs!
            </h1>
            <p className="text-[#909090] font-semibold py-7 leading-relaxed text-xl md:text-2xl">
              As a passionate personal trainer, I believe in empowering
              individuals to achieve their fitness goals through personalized
              coaching and support.{" "}
            </p>
            <button className="mt-2 text-2xl transition-colors h-[74px] text-white rounded-[16px] font-bold w-[214px] duration-300 transform bg-[#FF2332] lg:mt-0 hover:text-gray-900">
              Get Started
            </button>
          </div>
          <div className="w-full hidden lg:block  h-full lg:mt-20 xl:mt-0">
            <img
              className="relative z-10 h-full"
              src={persone}
              alt="persone image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute lg:block hidden w-[1105.48px] top-0 z-0 opacity-50 left-0 lg:left-[396px] h-[932.08px] lg:h-[958.08px]"
        src={bgImage}
        alt="background image"
        loading="lazy"
      />
      <div className="w-full h-[321px] bg-gradient-to-t from-[#1A1A1A] to-transparent absolute bottom-0 z-30">
      </div>
      <h3 className="textcolor text-7xl xs:text-8xl sm:text-[120px] md:text-[150px] lg:text-[200px] xl:text-[220px] font-extrabold absolute bottom-0 md:bottom-[-20px] lg:bottom-[-30px] z-0">JOHN DOE</h3>
    </section>
  );
}

export default Home;
