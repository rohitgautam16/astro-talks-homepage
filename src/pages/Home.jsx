import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import CreateChartSection from "../components/CreateChartSection";
import CelebrityChartsSection from "../components/CelebrityChartsSection";
import BirthChartPrint from "../components/BirthChartPrint";
import CelebrityCharts from "../components/CelebrityCharts";
import Footer from "../components/Footer";
import birthChart from "../assets/birthChart.png";
import synastry from "../assets/synastry.webp";
import composite from "../assets/composite.webp";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Birth Chart"
              description="Discover your astrological planetary positions, aspects, patterns, and more."
              linkText="BIRTH CHART"
              linkUrl="/birth-chart"
              illustration={birthChart}
            />
            <FeatureCard
              title="Synastry Chart"
              description="Understand a relationship's compatibility by overlaying two birth charts."
              linkText="SYNASTRY CHART"
              linkUrl="/synastry-chart"
              illustration={synastry}
            />
            <FeatureCard
              title="Composite Chart"
              description="Reveal a relationship's astrology by using the midpoints of two birth charts."
              linkText="COMPOSITE CHART"
              linkUrl="/composite-chart"
              illustration={composite}
            />
          </div>
        </div>

        <CreateChartSection />
        <CelebrityChartsSection />
        <BirthChartPrint />
        <CelebrityCharts />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
