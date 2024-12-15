import aboutImage from "/src/assets/woman-doing-workout-gym-with-trainer.svg";
function About() {
  return (
    <section>
      <div className="container mx-auto py-24 px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20 ">
          <div className="w-full flex justify-center items-center">
            <img
              className="opacity-[70%] w-[544.81px] h-[452.03px]"
              src={aboutImage}
              alt="personal image trainer"
              loading="lazy"
            />
          </div>
          <div className="w-full text-center lg:text-start">
            <h2 className="uppercase text-[60px] font-extrabold text-[#FFFFFF]  ">
              Who Is John?
            </h2>
            <p className="text-[#909090] w-full xl:w-[500px] text-2xl">
              As a passionate personal trainer, I believe in empowering
              individuals to achieve their fitness goals through personalized
              coaching and support.{" "}
            </p>
            <div className="flex items-center justify-center flex-col sm:flex-row lg:justify-start gap-5 mt-8">
              <div className="bg-[#1F1F1F] px-4 w-full sm:w-[177px] py-3 text-center rounded-md shadow-md">
                <h3 className="text-[#FF2332] text-[50px] font-bold">2000+</h3>
                <p className="text-[#909090] text-base">Satisfied Clients</p>
              </div>
              <div className="bg-[#1F1F1F] px-4 py-3 w-full sm:w-[177px] text-center rounded-md shadow-md">
                <h3 className="text-[#FF2332] text-[50px] font-bold">10</h3>
                <p className="text-[#909090] text-base">Years of Experience</p>
              </div>
              <div className="bg-[#1F1F1F] px-4 py-3 w-full sm:w-[177px] text-center rounded-md shadow-md">
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
