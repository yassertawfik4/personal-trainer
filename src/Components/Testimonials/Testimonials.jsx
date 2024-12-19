import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import image from "/src/assets/Group 39.svg";
import bgimage from "/src/assets/Group 31.svg";
// import required modules
import "./Testimonial.css";
import { Navigation } from "swiper/modules";

function Testimonials() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="relative z-10">
          <h2 className="uppercase text-4xl mb-5 md:text-6xl font-bold text-[#FFFFFF]">
            Hear it from them
          </h2>
        </div>
        <div className="relative">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="flex justify-center gap-12 items-center flex-wrap relative">
                <div className="bg-[#1F1F1F] w-full md:w-[556px] md:h-[280px] p-10 rounded-2xl relative z-10">
                  <img
                    className="absolute top-[-50px] left-[-40px] lg:block hidden"
                    src={bgimage}
                    alt="Background decorative element"
                    role="presentation"
                  />
                  <p className="text-[#FFFFFF] text-lg md:text-3xl w-full md:w-[476px] relative z-10">
                    "I’ve never felt stronger! John pushed me to my limits while
                    providing the support I needed to succeed. Highly recommended!"
                  </p>
                  <p className="text-[#909090] mt-5 font-bold">Daniele Debbians</p>
                </div>
                <div>
                  <img
                    className="md:w-[312px] w-full md:h-[386px] object-cover"
                    src={image}
                    alt="Testimonial by Daniele Debbians"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center gap-12 items-center flex-wrap">
                <div className="bg-[#1F1F1F] w-full md:w-[556px] md:h-[280px] p-10 rounded-2xl">
                  <p className="text-[#FFFFFF] text-lg md:text-3xl w-full md:w-[476px]">
                    "I’ve never felt stronger! John pushed me to my limits while
                    providing the support I needed to succeed. Highly recommended!"
                  </p>
                  <p className="text-[#909090] mt-5 font-bold">Daniele Debbians</p>
                </div>
                <div>
                  <img
                    className="md:w-[312px] w-full md:h-[386px] object-cover"
                    src={image}
                    alt="Testimonial by Daniele Debbians"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <span className="absolute w-full sm:w-[537px] h-[537px] top-[-53px] z-0 left-0 sm:left-[111px] blur-[160px] opacity-[20%] rounded-full bg-[#FF2332]"></span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
