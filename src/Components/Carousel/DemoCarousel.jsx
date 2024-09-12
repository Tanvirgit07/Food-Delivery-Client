import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const DemoCarousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="w-full h-[82vh] mt-7">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <img src="https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg" alt="" /> */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="text-neutral-content">
              <div className="text-start ml-10">
                <h1 className="mb-5 text-5xl font-bold text-orange-500">Hello there.....</h1>
                <p className="mb-5 w-6/12">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-outline btn-secondary btn-sm rounded-full">View Menu</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://i.ibb.co.com/5BtF0FV/car-6.jpg" alt="" /> */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="text-neutral-content">
              <div className="text-start ml-10">
                <h1 className="mb-5 text-5xl font-bold text-orange-500">Hello there.....</h1>
                <p className="mb-5 w-6/12">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-outline btn-secondary btn-sm rounded-full">View Menu</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img
            src="https://i.ibb.co.com/RycBzwz/pexels-chanwalrus-958545.jpg"
            alt=""
          /> */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="text-neutral-content">
              <div className="text-start ml-10">
                <h1 className="mb-5 text-5xl font-bold text-orange-500">Hello there.....</h1>
                <p className="mb-5 w-6/12">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-outline btn-secondary btn-sm rounded-full">View Menu</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img
            src="https://i.ibb.co.com/RycBzwz/pexels-chanwalrus-958545.jpg"
            alt=""
          /> */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="text-neutral-content">
              <div className="text-start ml-10">
                <h1 className="mb-5 text-5xl font-bold text-orange-500">Hello there.....</h1>
                <p className="mb-5 w-6/12">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-outline btn-secondary btn-sm rounded-full">View Menu</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img
            src="https://i.ibb.co.com/RycBzwz/pexels-chanwalrus-958545.jpg"
            alt=""
          /> */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="text-neutral-content">
              <div className="text-start ml-10">
                <h1 className="mb-5 text-5xl font-bold text-orange-500">Hello there.....</h1>
                <p className="mb-5 w-6/12">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-outline btn-secondary btn-sm rounded-full">View Menu</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img
            src="https://i.ibb.co.com/RycBzwz/pexels-chanwalrus-958545.jpg"
            alt=""
          /> */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="text-neutral-content">
              <div className="text-start ml-10">
                <h1 className="mb-5 text-5xl font-bold text-orange-500">Hello there.....</h1>
                <p className="mb-5 w-6/12">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-outline btn-secondary btn-sm rounded-full">View Menu</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img
            src="https://i.ibb.co.com/RycBzwz/pexels-chanwalrus-958545.jpg"
            alt=""
          /> */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="text-neutral-content">
              <div className="text-start ml-10">
                <h1 className="mb-5 text-5xl font-bold text-orange-500">Hello there.....</h1>
                <p className="mb-5 w-6/12">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-outline btn-secondary btn-sm rounded-full">View Menu</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img
            src="https://i.ibb.co.com/RycBzwz/pexels-chanwalrus-958545.jpg"
            alt=""
          /> */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="text-neutral-content">
              <div className="text-start ml-10">
                <h1 className="mb-5 text-5xl font-bold text-orange-500">Hello there.....</h1>
                <p className="mb-5 w-6/12">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-outline btn-secondary btn-sm rounded-full">View Menu</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img
            src="https://i.ibb.co.com/RycBzwz/pexels-chanwalrus-958545.jpg"
            alt=""
          /> */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="text-neutral-content">
              <div className="text-start ml-10">
                <h1 className="mb-5 text-5xl font-bold text-orange-500">Hello there.....</h1>
                <p className="mb-5 w-6/12">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-outline btn-secondary btn-sm rounded-full">View Menu</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default DemoCarousel;
