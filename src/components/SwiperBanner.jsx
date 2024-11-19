import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination} from "swiper/modules";
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"

const SwiperBanner = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide><img className="lg:h-[520px] lg:w-full lg:object-cover" src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="lg:h-[520px] lg:w-full lg:object-cover" src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="lg:h-[520px] lg:w-full lg:object-cover" src={banner3} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};
export default SwiperBanner;
