import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kevin Andrew",
    role: "Freelance Developer",
    text: "I wanted to develop freelancing as a career. Now I am pursuing it full-time!",
    image: "/kevin.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Expert",
    text: "Freelancing has given me the flexibility I always wanted!",
    image: "/sarah.jpg",
  },
  {
    id: 3,
    name: "Mark Williams",
    role: "Software Engineer",
    text: "Referrals have changed my career path. Now I work with amazing clients!",
    image: "/mark.jpg",
  },
];

const TestimonialSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  const previousIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
  const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-4xl">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-[#0E0B3D] mb-6">
          Client Speaks
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          className="relative"
          onSlideChange={handleSlideChange}
          ref={swiperRef}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="relative flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
                
                <div
                  className="hidden md:flex w-1/4 relative cursor-pointer group"
                  onClick={() => swiperRef.current?.swiper.slidePrev()}
                >
                  <div className="absolute inset-0 bg-blue-500 opacity-50 flex justify-center items-center rounded-lg transition-opacity">
                    <span className="text-white text-2xl font-bold">&#8592;</span>
                  </div>
                  <img
                    src={testimonials[previousIndex].image}
                    alt={testimonials[previousIndex].name}
                    className="w-24 h-24 rounded-full opacity-50"
                  />
                </div>

                <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start px-6">
                  <div className="bg-white p-6 shadow-lg rounded-lg">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full mb-4"
                    />
                    <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
                    <h3 className="text-[#0E0B3D] font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                <div
                  className="hidden md:flex w-1/4 relative cursor-pointer group"
                  onClick={() => swiperRef.current?.swiper.slideNext()}
                >
                  <div className="absolute inset-0 bg-blue-500 opacity-50 flex justify-center items-center rounded-lg transition-opacity">
                    <span className="text-white text-2xl font-bold">&#8594;</span>
                  </div>
                  <img
                    src={testimonials[nextIndex].image}
                    alt={testimonials[nextIndex].name}
                    className="w-24 h-24 rounded-full opacity-50"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
