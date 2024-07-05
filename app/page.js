import Header from "./components/navbar/page";
import Footer from "./components/footer/page";
import HomePage from "./components/home/page";
import Features from "./components/features.js/page";
import Reviews from "./components/reviews/page";
import Questions from "./components/questions/page";
import Pricing from "./components/pricing/page";
import SharePage from "./components/share/page";
import Vendors from "./components/vendors/page";
import Manage from "./components/manage/page";
import Paytime from "./components/paytime/page";
import Funding from "./components/funding/page";



export default function Home() {
  return (
    <div className="relative bg-[#FAF9FF] overflow-hidden">
      <Header />
      <HomePage />
      <Features />
      <SharePage />
      <Vendors />
      <Manage />
      <Paytime />
      <Funding />
      <Reviews />
      <Pricing />
      <Questions />
      <Footer />
    </div>
  );
}
