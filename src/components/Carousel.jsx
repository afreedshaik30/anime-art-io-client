import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
const sampleImages = [img1, img2, img3];

export default function Carousel() {
  return (
    <div className="w-full max-w-4xl mx-auto mb-10">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500 }}
        modules={[Autoplay]}
      >
        {sampleImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Sample ${index}`}
              className="rounded-xl shadow-md w-full object-cover max-h-96"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
