import QuilImage from "/src/assets/couple-training-together-gym.svg";

function Qualifications() {
  return (
    <section className="mt-10">
      <div className="container mx-auto py-24 px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 ">
          <div className="w-full text-center lg:text-start">
            <h2 className="uppercase text-4xl sm:text-[60px] pb-10 font-extrabold text-[#FFFFFF]  ">
              Qualifications
            </h2>
            <p className="text-[#909090] w-full xl:w-[477px] text-2xl">
              I’m a certified fitness trainer with over 10 years of experience,
              specializing in personal training and nutrition. I’m passionate
              about helping individuals transform their lives and aim to create
              a welcoming environment where everyone can thrive, regardless of
              fitness level.{" "}
            </p>
            <div className="flex items-center justify-center flex-col sm:flex-row lg:justify-start gap-5 mt-8">
              <div className="bg-[#1F1F1F] px-4 w-full h-[72px] sm:w-[145px] py-3 flex items-center justify-center rounded-md shadow-md">
                <h3 className="text-[#FF2332] text-[50px] font-bold uppercase">
                  CPT
                </h3>
              </div>
              <div className="bg-[#1F1F1F] px-4 flex items-center justify-center py-3 w-full h-[72px] sm:w-[145px] rounded-md shadow-md">
                <h3 className="text-[#FF2332] text-[50px] font-bold uppercase">
                  CFT
                </h3>
              </div>
              <div className="bg-[#1F1F1F] flex items-center justify-center px-4 py-3 w-full h-[72px] sm:w-[145px] rounded-md shadow-md">
                <h3 className="text-[#FF2332] text-[50px] font-bold uppercase">
                  CN
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <img
              className="opacity-[70%] w-[544.81px] h-[452.03px]"
              src={QuilImage}
              alt="personal image trainer"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;
