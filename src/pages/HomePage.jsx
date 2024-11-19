import OurMission from "../components/OurMission";
import OurServices from "../components/OurServices";
import SwiperBanner from "../components/SwiperBanner";
import WhyChooseUs from "../components/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <SwiperBanner></SwiperBanner>
      <OurServices></OurServices>
      <OurMission></OurMission>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};
export default HomePage;
