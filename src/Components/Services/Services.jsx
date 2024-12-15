function Services() {
  return (
    <section>
      <div className="container mx-auto py-24 px-6 lg:px-0">
        <div className="text-center">
          <h2 className="uppercase text-6xl font-bold text-[#FFFFFF]">
            Training Programs
          </h2>
          <p className="text-[#909090] text-3xl ">Choose your program</p>
        </div>
        <div className="flex justify-center items-center gap-9 mt-16 flex-wrap">
          <div className="w-[302px] h-[354px] shadow-lg py-[30px] rounded-xl px[30px] border border-[rgba(255,255,255,0.6)] text-[#FFFFFF] text-center">
            <h3 className="text-xl">Personal Trainings</h3>
            <h4 className="text-7xl font-bold">200$</h4>
            <p className="text-[#909090] text-lg mt-4">Monthly Membership</p>
            <p className="text-[#909090] my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="opacity-[1] transition-colors h-[44px] rounded-[6px] font-bold w-[121px] duration-300 transform bg-[#FF2332] lg:mt-0 lg:mx-4 hover:text-gray-900">
              Get Started
            </button>
          </div>
          <div className="w-[302px] h-[410px] shadow-lg py-[30px] rounded-xl px[30px] border border-[#FF2332] text-[#FFFFFF] text-center">
            <h3 className="text-xl">Personals Training + Diet</h3>
            <h4 className="text-7xl font-bold text-[#FF2332]">300$</h4>
            <p className="text-[#909090] text-lg mt-4">Monthly Membership</p>
            <p className="text-[#909090] my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="opacity-[1] transition-colors h-[44px] rounded-[6px] font-bold w-[121px] duration-300 transform bg-[#FF2332] lg:mt-0 lg:mx-4 hover:text-gray-900">
              Get Started
            </button>
          </div>
          <div className="w-[302px] h-[354px] shadow-lg py-[30px] rounded-xl px[30px] border border-[rgba(255,255,255,0.6)] text-[#FFFFFF] text-center">
            <h3 className="text-xl">Diet</h3>
            <h4 className="text-7xl font-bold">150$</h4>
            <p className="text-[#909090] text-lg mt-4">Monthly Membership</p>
            <p className="text-[#909090] my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="opacity-[1] transition-colors h-[44px] rounded-[6px] font-bold w-[121px] duration-300 transform bg-[#FF2332] lg:mt-0 lg:mx-4 hover:text-gray-900">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
