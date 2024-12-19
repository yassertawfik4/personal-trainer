import aboutImage from "/src/assets/woman-doing-workout-gym-with-trainer.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out", // Easing
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <section aria-labelledby="about-heading" className="bg-dark">
      <div className="container mx-auto py-24 px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20">
          {/* Image Section */}
          <div className="w-full flex justify-center items-center">
            <img
              data-aos="fade-right"
              data-aos-duration="700"
              className="opacity-[70%] w-[544.81px] h-[452.03px]"
              src={aboutImage}
              alt="A personal trainer guiding a client during a gym workout session"
              loading="lazy"
            />
          </div>

          {/* Text Section */}
          <div className="w-full text-center lg:text-start">
            <h2
              id="about-heading"
              data-aos="fade-left"
              data-aos-duration="1000"
              className="uppercase text-[60px] font-extrabold text-[#FFFFFF]"
            >
              Who Is John?
            </h2>
            <p
              data-aos="fade-left"
              data-aos-duration="1200"
              className="text-[#909090] w-full xl:w-[500px] text-2xl"
            >
              As a passionate personal trainer, I believe in empowering
              individuals to achieve their fitness goals through personalized
              coaching and support.
            </p>

            {/* Statistics Section */}
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              className="flex items-center justify-center flex-col sm:flex-row lg:justify-start gap-5 mt-8"
            >
              {/* Statistic Box 1 */}
              <div
                className="bg-[#1F1F1F] px-4 w-full sm:w-[177px] py-3 text-center rounded-md shadow-md"
                aria-label="Over 2000 satisfied clients"
              >
                <h3 className="text-[#FF2332] text-[50px] font-bold">2000+</h3>
                <p className="text-[#909090] text-base">Satisfied Clients</p>
              </div>

              {/* Statistic Box 2 */}
              <div
                className="bg-[#1F1F1F] px-4 py-3 w-full sm:w-[177px] text-center rounded-md shadow-md"
                aria-label="10 years of personal training experience"
              >
                <h3 className="text-[#FF2332] text-[50px] font-bold">10</h3>
                <p className="text-[#909090] text-base">Years of Experience</p>
              </div>

              {/* Statistic Box 3 */}
              <div
                className="bg-[#1F1F1F] px-4 py-3 w-full sm:w-[177px] text-center rounded-md shadow-md"
                aria-label="15 years of involvement in sports"
              >
                <h3 className="text-[#FF2332] text-[50px] font-bold">15</h3>
                <p className="text-[#909090] text-base">Years in Sport</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
