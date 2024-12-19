import train from "/src/assets/couple-training-together-gym (1) 1.svg";

function GetStarted() {
  return (
    <section className="my-36">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex justify-center items-center gap-14">
          <div className="relative lg:block hidden">
            <img
              className=" w-[466px] h-[602px]"
              loading="lazy"
              src={train}
              alt="Couple training together in a gym"
            />
            <div className="absolute w-[471px] h-[162px] bg-gradient-to-t from-[#1A1A1A] to-transparent bottom-0"></div>
          </div>
          <header className="text-center lg:text-start ">
            <h2 className="uppercase text-[#FFFFFF] text-3xl md:text-6xl font-bold w-full md:w-[495px]">
              You want to train with me?
            </h2>
            <p className="text-[#909090] my-5 text-xl">
              Feel free to contact me if you want to train with me.
            </p>
            <button
              aria-label="Get started with training"
              className="mt-2 text-xl lg:text-2xl transition-colors w-[150px] h-[60px] md:h-[74px] text-white rounded-[16px] font-bold md:w-[214px] duration-300 transform bg-[#FF2332] lg:mt-0 hover:text-gray-900"
            >
              Get Started
            </button>
          </header>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
