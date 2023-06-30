import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const TetimonialCard = (): JSX.Element => {
  return (
    <div className="w-[465px] h-[268px] shadow-md border-current rounded-lg px-12 py-9">
      <div className="flex item-start">
        <div className="flex gap-5">
          <img
            src="/assests/review.png"
            className="w-[70px] h-[70px] rounded-full"
            alt="person"
          />
          <div className="gap-3">
            <h6 className="name">Lolla Smith</h6>
            <h5>Microsoft</h5>
            <div className="flex">
              <img src="/assests/star.png" alt="star" />
              <img src="/assests/star.png" alt="star" />
              <img src="/assests/star.png" alt="star" />
              <img src="/assests/star.png" alt="star" />
              <img src="/assests/star.png" alt="star" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="testimonial-slider__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Repudiandae quia quisquam corrupti iste amet consectetur, debitis, ipsam
        </div>
      </div>
    </div>
  )
}

const Testimonials: React.FC = () => {
  return (
    <div className="px-[200px] py-[57px]">
      <h2 className="text-[40px] font-bold">Review from customers</h2>
      <p className="text-sm font-medium w-[399px] mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
      </p>
      <Swiper
        className="h-[350px] overflow-hidden pb-5"
        slidesPerView={1}
        loopedSlides={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <TetimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TetimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TetimonialCard />
        </SwiperSlide>
      </Swiper>
    </div >
  );
};

export default Testimonials;

