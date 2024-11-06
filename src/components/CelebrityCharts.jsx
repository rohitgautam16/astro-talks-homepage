import React from "react";
import marthaStewart from "../assets/martha-stewart_cropped.png";
import kamalaHarris from "../assets/kamala-harris_cropped.png";
import donaldTrump from "../assets/donald-trump_cropped.png";
import meganTheeStallion from "../assets/megan-thee-stallion_cropped.png";
import tylerTheCreator from "../assets/tyler-the-creator_cropped.png";
import taylorSwift from "../assets/taylor-swift_cropped.png";
import sabrinaCarpenter from "../assets/sabrina-carpenter_cropped.png";
import billieEilish from "../assets/billie-eilish_cropped.png";
import seanCombs from "../assets/sean-combs_cropped.png";
import zendaya from "../assets/zendaya_cropped.png";
import liamPayne from "../assets/liam-payne_cropped.png";
import harryStyles from "../assets/harry-styles_cropped.png";

const celebrityData = [
  { id: 1, sign: "LEO", name: "Martha Stewart", date: "Aug 03, 1941", image: marthaStewart },
  { id: 2, sign: "LIBRA", name: "Kamala Harris", date: "Oct 20, 1964", image: kamalaHarris },
  { id: 3, sign: "GEMINI", name: "Donald Trump", date: "Jun 14, 1946", image: donaldTrump },
  { id: 4, sign: "AQUARIUS", name: "Megan Thee Stallion", date: "Feb 15, 1995", image: meganTheeStallion },
  { id: 5, sign: "PISCES", name: "Tyler, the Creator", date: "Mar 06, 1991", image: tylerTheCreator },
  { id: 6, sign: "SAGITTARIUS", name: "Taylor Swift", date: "Dec 13, 1989", image: taylorSwift },
  { id: 7, sign: "TAURUS", name: "Sabrina Carpenter", date: "May 11, 1999", image: sabrinaCarpenter },
  { id: 8, sign: "SAGITTARIUS", name: "Billie Eilish", date: "Dec 18, 2001", image: billieEilish },
  { id: 9, sign: "SCORPIO", name: "Sean Combs", date: "Nov 04, 1969", image: seanCombs },
  { id: 10, sign: "VIRGO", name: "Zendaya", date: "Sep 01, 1996", image: zendaya },
  { id: 11, sign: "VIRGO", name: "Liam Payne", date: "Aug 29, 1993", image: liamPayne },
  { id: 12, sign: "AQUARIUS", name: "Harry Styles", date: "Feb 01, 1994", image: harryStyles },
];

const CelebrityCharts = () => {
  return (
    <div className="bg-white py-12 px-8 md:px-16">
      <h2 className="text-xl font-semibold text-gray-800 mb-8">Trending Celebrity Charts</h2>
      <hr className="mb-8 border-t border-gray-300" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {celebrityData.map((celebrity, index) => (
          <div key={celebrity.id} className="flex items-center space-x-6">
            <span className="text-base font-bold text-gray-600">{index + 1}</span>
            
            <img
              src={celebrity.image}
              alt={celebrity.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            
            <div>
              <h3 className="text-sm font-bold text-gray-800 uppercase">{celebrity.sign}</h3>
              <p className="text-base font-medium text-gray-700">{celebrity.name}</p>
              <p className="text-sm text-gray-500 italic">{celebrity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CelebrityCharts;
