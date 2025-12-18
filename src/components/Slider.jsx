import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import "../styles/Slider.css";

export const slidesData = [
  {
    imgSrc: image1,
    title: "Soil is Your Hidden Wealth",
    caption: "Healthy soil captures more carbon and grows stronger crops.",
  },
  {
    imgSrc: image2,
    title: "Trees Capture Carbon Daily",
    caption: "More trees means more carbon credits for your farm.",
  },
  {
    imgSrc: image3,
    title: "Save Water, Save Carbon",
    caption: "Efficient irrigation reduces emissions and boosts credit value.",
  },
  {
    imgSrc: image4,
    title: "Solar Makes Farms Carbon-Smart",
    caption: "Switching to solar reduces your carbon footprint instantly.",
  },
  {
    imgSrc: image5,
    title: "Smart Farming, Less Emissions",
    caption: "Organic and balanced fertilizer use lowers harmful gases.",
  },
  {
    imgSrc: image6,
    title: "Earn from Carbon Credits",
    caption: "Turn sustainable farming practices into yearly income.",
  },
];

export default function Slider() {
  const swiperWrappedRef = useRef(null);

  //   function adjustMargin() {
  //     const screenWidth = window.innerWidth;

  //     if (swiperWrappedRef.current) {
  //       swiperWrappedRef.current.style.marginLeft =
  //         screenWidth <= 520
  //           ? "0px"
  //           : screenWidth <= 650
  //           ? "-50px"
  //           : screenWidth <= 800
  //           ? "-100px"
  //           : "-150px";
  //     }
  //   }

  //   ✅ CORRECT useEffect placement
  //   useEffect(() => {
  //     adjustMargin();
  //     window.addEventListener("resize", adjustMargin);

  //     return () => window.removeEventListener("resize", adjustMargin);
  //   }, []);

  return (
    <main>
      <div className="slider-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          grabCursor
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={0}
          speed={1000}
          slideToClickedSlide
          loop={true}
          onSlideChange={(swiper) => swiper.updateSlides()}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{
            delay: 5000, // 5 seconds
            disableOnInteraction: false, // continue autoplay even after manual swipe
          }}
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 10 },
            480: { slidesPerView: 1.3, spaceBetween: 25 },
            650: { slidesPerView: 1.5, spaceBetween: 40 },
            1000: { slidesPerView: 1.8, spaceBetween: 55 },
          }}
          //   onSwiper={(swiper) => {
          //     swiperWrappedRef.current = swiper.wrapperEl;
          //   }}
        >
          {slidesData.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <img src={slide.imgSrc} alt={slide.title} />
              <div className="title">
                <h1>{slide.title}</h1>
              </div>
              <div className="content">
                <p className="text-box">{slide.caption}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination"></div>
      </div>
    </main>
  );
}
