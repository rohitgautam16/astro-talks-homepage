import { Link } from "react-router-dom";
import { ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import navlogo from "../assets/nav-icon.png";
import SideMenu from "./SideMenu";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    createChart: false,
    celebrityCharts: false,
    resources: false,
  });

  const handleMouseEnter = (dropdown) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: true,
    }));
  };

  const handleMouseLeave = (dropdown) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: false,
    }));
  };

  return (
    <>
      <nav className="py-4 px-6 md:px-12 bg-white border-b border-gray-200">
      <div className="flex flex-row items-center justify-between">
        
        <button 
          className=" text-white focus:outline-none bg-black p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img src={navlogo} alt="navLogo" className="h-10" />
          </Link>
        </div>

        <div className="flex items-center space-x-6 mt-1">
          <Link to="/login" className="hidden md:block text-gray-700 hover:text-black">
            Sign Up / Login
          </Link>
          <span className="hidden md:block border-l h-6 border-gray-300"></span>
          <Link to="/cart" className="relative">
            <ShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex justify-center space-x-8 mt-6 text-blue-700 ">
        <Link to="/" className="nav-link">HOME</Link>

        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter("createChart")}
          onMouseLeave={() => handleMouseLeave("createChart")}
        >
          <button className="nav-link focus:outline-none">
            CREATE CHART
          </button>
          {isDropdownOpen.createChart && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border-2 border-black z-50">
              <Link to="/create-chart/birth-chart" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                BIRTH CHART
              </Link>
              <Link to="/create-chart/synastry" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                SYNASTRY
              </Link>
              <Link to="/create-chart/composite" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                COMPOSITE
              </Link>
              <Link to="/create-chart/transits" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                TRANSITS
              </Link>
              <Link to="/create-chart/moon-phases" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                MOON PHASES
              </Link>
            </div>
          )}
        </div>

        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter("celebrityCharts")}
          onMouseLeave={() => handleMouseLeave("celebrityCharts")}
        >
          <button className="nav-link focus:outline-none">
            CELEBRITY CHARTS
          </button>
          {isDropdownOpen.celebrityCharts && (
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg border-2 border-black z-50">
              <Link to="/celebrity-charts/sun-sign" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                SEARCH BY SUN SIGN
              </Link>
              <Link to="/celebrity-charts/aspect" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                SEARCH BY ASPECT
              </Link>
              <Link to="/celebrity-charts/sun-moon-combination" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                SEARCH BY SUN/MOON COMBINATION
              </Link>
              <Link to="/celebrity-charts/planetary-positions" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                SEARCH BY PLANETARY POSITIONS
              </Link>
              <Link to="/celebrity-charts/chart-patterns" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                SEARCH BY CHART PATTERNS
              </Link>
              <Link to="/celebrity-charts/advanced-search" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                ADVANCED SEARCH
              </Link>
            </div>
          )}
        </div>

        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter("resources")}
          onMouseLeave={() => handleMouseLeave("resources")}
        >
          <button className="nav-link focus:outline-none">
            RESOURCES
          </button>
          {isDropdownOpen.resources && (
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg border-2 border-black z-50">
              <Link to="/resources/astrology-widgets" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                ASTROLOGY WIDGETS
              </Link>
              <Link to="/resources/articles" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                ARTICLES
              </Link>
              <Link to="/resources/planetary-transits" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                PLANETARY TRANSITS
              </Link>
              <Link to="/resources/chart-of-the-moment" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                CHART OF THE MOMENT
              </Link>
              <Link to="/resources/affiliate" className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-astro-white">
                AFFILIATE
              </Link>
            </div>
          )}
        </div>

        <Link to="/shop" className="nav-link">SHOP</Link>
        <Link to="/contact" className="nav-link">CONTACT</Link>
      </div>
    </nav>
    <div>
    <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
    </>
    
  );
};

export default Navbar;
