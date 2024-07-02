import Image from "next/image";
import Header from "./components/navbar/page";
import Footer from "./components/footer/page";
import HomePage from "./components/home/page";
import Features from "./components/features.js/page";
import Reviews from "./components/reviews/page";
import Questions from "./components/questions/page";
import Pricing from "./components/pricing/page";
import SharePage from "./components/share/page";



export default function Home() {
  return (
    <div className="relative ">
      <Header />
      <HomePage />
      <Features />
      <SharePage />
      <Reviews />
      <Pricing />
      <Questions />
      <Footer />
    </div>
  );
}
