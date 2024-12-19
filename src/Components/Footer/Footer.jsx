function Footer() {
    return (
      <footer className="py-10">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="w-full text-[#FFFFFF]">
              <h2 className="text-xl font-semibold">Personal Trainer</h2>
              <p className="text-[#909090] mt-5">
                Lorem ipsum dolor sit amet consectetur. Ut a mattis eget augue
                vivamus parturient eu aliquet. In laoreet risus ut nulla interdum
                urna sollicitudin. Nisl viverra in id ultricies.
              </p>
              <div className="flex items-center text-[#909090] mt-3 gap-6">
                <a href="#" aria-label="Facebook" className="text-2xl">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" aria-label="Instagram" className="text-2xl">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
  
            <div className="text-[#FFFFFF]">
              <h2 className="mb-5 text-xl font-semibold">Menu</h2>
              <ul className="flex flex-col gap-4 text-[#909090]">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
  
            <div className="text-[#FFFFFF]">
              <h2 className="mb-5 text-xl font-semibold">Contact</h2>
              <ul className="flex flex-col gap-4 text-[#909090]">
                <li>Lorem Ipsum 22, LP19204</li>
                <li>+(123) 231123321</li>
                <li><a href="mailto:johntrainig@mail.com">johntrainig@mail.com</a></li>
              </ul>
            </div>
          </div>
          
          <hr className="mt-10 bg-[#909090]" />
          <p className="text-[#909090] text-center mt-8">
            © 2024. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  