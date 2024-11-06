import { Link } from "react-router-dom";
import { X } from "lucide-react";

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-brown-50 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ overflowY: 'scroll', }}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Home</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="py-4">
          <div className="px-4 py-2">
            <Link to="/login" className="block py-2 text-gray-700 hover:text-black" onClick={onClose}>
              Sign Up
            </Link>
            <Link to="/cart" className="block py-2 text-gray-700 hover:text-black" onClick={onClose}>
              Cart
            </Link>
          </div>

          <div className="border-t border-gray-200 mt-2">
            <div className="px-4 py-2">
              <h3 className="font-semibold py-2">Create Your Chart</h3>
              <Link to="/create-chart/birth-chart" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Birth Chart
              </Link>
              <Link to="/create-chart/synastry" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Synastry Chart
              </Link>
              <Link to="/create-chart/composite" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Composite Chart
              </Link>
              <Link to="/create-chart/transits" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Transits
              </Link>
              <Link to="/create-chart/moon-phases" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Moon Phases
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-200">
            <div className="px-4 py-2">
              <h3 className="font-semibold py-2">Celebrity Charts</h3>
              <Link to="/celebrity-charts/sun-sign" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Search By Sun Sign
              </Link>
              <Link to="/celebrity-charts/aspect" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Search By Aspect
              </Link>
              <Link to="/celebrity-charts/sun-moon-combination" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Search By Sun/Moon Combination
              </Link>
              <Link to="/celebrity-charts/planetary-positions" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Search By Planetary Positions
              </Link>
              <Link to="/celebrity-charts/chart-patterns" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Search By Chart Patterns
              </Link>
              <Link to="/celebrity-charts/advanced-search" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Advanced Search
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-200">
            <div className="px-4 py-2">
              <h3 className="font-semibold py-2">Resources</h3>
              <Link to="/resources/astrology-widgets" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Astrology Widgets
              </Link>
              <Link to="/resources/articles" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Articles
              </Link>
              <Link to="/resources/planetary-transits" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Planetary Transits
              </Link>
              <Link to="/resources/chart-of-the-moment" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Chart of the Moment
              </Link>
              <Link to="/resources/affiliate" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Affiliate
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-200">
            <div className="px-4 py-2">
              <h3 className="font-semibold py-2">Shop</h3>
              <Link to="/shop" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Guide to Your Birth Chart
              </Link>
              <Link to="/shop" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Guide to Your Synastry Chart
              </Link>
              <Link to="/shop" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Birth Chart Print
              </Link>
              <Link to="/shop" className="block py-2 pl-4 text-gray-700 hover:text-black" onClick={onClose}>
                Moon Calendar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;