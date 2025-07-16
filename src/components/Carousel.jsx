import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const img1 = "https://i.ibb.co/ZRHDdjGK/img1.jpg";
const img2 = "https://i.ibb.co/cSJFYMKV/img2.jpg";
const img3 = "https://i.ibb.co/DH7rKC6N/img3.jpg";

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
