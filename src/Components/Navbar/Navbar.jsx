import { useState } from "react";
import logo from "/src/assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = [
    { name: "Home", url: "#" },
    { name: "About", url: "#about" },
    { name: "Qualifications", url: "#qualifications" },
    { name: "Services", url: "#services" },
    { name: "Testimonials", url: "#testimonials" },
    { name: "F&Q", url: "#faq" },
  ];

  return (
    <nav className="shadow bg-[#1F1F1F] sticky top-0 z-50">
      <div className="container py-4 mx-auto px-6 lg:px-0">
        <div className="lg:flex lg:items-center justify-between">
          {/* الشعار */}
          <div className="flex items-center justify-between text-[#FFFFFF]">
            <a href="#" aria-label="Home">
              <img className="w-20" src={logo} alt="Logo" />
            </a>

            {/* زر القائمة للموبايل */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* القائمة */}
          <div
            className={`absolute inset-x-0 bg-[#1F1F1F] z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out lg:mt-0 lg:p-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0"
            }`}
          >
            <div className="flex container mx-auto flex-col text-[#FFFFFF] capitalize w-full justify-end lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
              {pages.map(({ name, url }, index) => (
                <a
                  key={index}
                  href={url}
                  className="mt-2 opacity-[50%] transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-[#FF2332] hover:opacity-[100%] cursor-pointer"
                >
                  {name}
                </a>
              ))}
              <button className="opacity-[1] border-2 border-[#FF2332] mt-2 transition-colors hover:bg-transparent h-[44px] rounded-[6px] font-bold w-[121px] duration-300 transform bg-[#FF2332] lg:mt-0 lg:mx-4 hover:text-[#FF2332]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
