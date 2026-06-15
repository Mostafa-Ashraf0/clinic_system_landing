import Header from "./components/header";
import Hero from "./components/hero";
import KeyFeatures from "./components/keyFeatures/KeyFeatures";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import PricingSection from "./components/PricingSection/PricingSection";
import Footer from "./components/Footer/Footer";
import { features } from "../data/FeaturesSection";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <KeyFeatures/>
      {features.map((feat, index)=>(
        <FeatureSection
        key = {index}
        title = {feat.title}
        titleSpan = {feat.titleSpan}
        para = {feat.description}
        list = {feat.features}
        active = {feat.active}
        image = {feat.image}
        />
      ))}
      <PricingSection/>
      <Footer/>
    </div>
  );
}
